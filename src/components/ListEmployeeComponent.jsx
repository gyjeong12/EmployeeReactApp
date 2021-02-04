import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Button, Table } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { compose } from "recompose/compose";
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
// import BootstrapTable from 'react-bootstrap-table-next';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        console.log(`List employee props here are: ${JSON.stringify(props)}`)

        this.state={
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);

        this.props.setAuthenticated(true);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({
                employees: this.state.employees.filter(employee => employee.id !== id)
            });
        });
    }

    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }

    editEmployee(id){
        this.props.history.push(`/update-employee/${id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployees()
            .then((res) => {
                this.setState({ 
                    employees: res.data
                });
            })
            .catch(res => console.log(res))
    }

    addEmployee(){
        this.props.history.push('/add-employee');
    }

    render() {
        return (
            <div>
               <h2 className="text-center">Employees List</h2> 
               <div className = "row">
                   <Button variant="primary" className="mb-1" 
                    onClick={this.addEmployee}>Add Employee</Button>{' '}                 
               </div>
               <div className = "row">
                   <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th> Employee ID</th>
                            <th> First Name</th>
                            <th> Last Name</th>
                            <th> Email Address</th>
                            <th> Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.employees.map(
                                employee =>
                                <tr key = {employee.id}>
                                    <td className="text-center">{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                    <td>
                                        <Button variant="outline-primary" 
                                            onClick={() => this.editEmployee(employee.id)}>Update
                                        </Button>
                                        <Button variant="danger" style={{marginLeft: "10px"}}
                                            onClick={() => this.deleteEmployee(employee.id)}>Delete
                                        </Button>
                                        <Button variant="info" style={{marginLeft: "10px"}}
                                            onClick={() => this.viewEmployee(employee.id)}>Details
                                        </Button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                   </Table>
               </div>
            </div>
        );
    }
}

const authProps = (state) => {
    const { auth } = state;
    console.log(`State fetched from store is: ${JSON.stringify(state)}`);
    return { auth: auth};
}

export default withRouter(connect(authProps)(ListEmployeeComponent));