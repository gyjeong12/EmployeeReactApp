import React, { Component } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props);

        this.state={
            firstName: '',
            lastname: '',
            emailId: '',
            passwordId: '',
            roleId: ''
        }
        // this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        // this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        // this.changeEmailHandler = this.changeEmailHandler.bind(this);
        // this.changePasswordHandler = this.changePasswordHandler.bind(this);
        // this.changeRolelHandler = this.changeRolelHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
        this.cancel = this.cancel.bind(this);

        this.props.setAuthenticated(true);
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId, passwordId: this.state.passwordId, roleId: this.state.roleId};
        console.log('employee => '+ JSON.stringify(employee));

        EmployeeService.createEmployee(employee).then(res => {
            this.props.history.push('/employees');
        });
    }

    cancel(){
        this.props.history.push('/employees');
    }

    // changeFirstNameHandler= (event) => {
    //     this.setState({firstName: event.target.value});
    // } 

    // changeLastNameHandler= (event) => {
    //     this.setState({lastName: event.target.value});
    // }

    // changeEmailHandler= (event) => {
    //     this.setState({emailId: event.target.value});
    // }

    // changePasswordHandler= (event) => {
    //     this.setState({passwordId: event.target.value});
    // }

    // changeRolelHandler= (event) => {
    //     this.setState({roleId: event.target.value});
    // }

    changeHandler= (event) => {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }

    render() {
        const divStyle = {
            marginLeft : '10px',
            marginRight : '10px',
        };

        const divvStyle = {
            marginLeft : '10px',
            marginBottom : '10px'
        };
        
        return (
            <Container>                
                <Row>
                <Col/>
                <Col>
                <Card style={{width: '30rem', marginTop: '15px'}}>
                    <Card.Header><h3 className="text-center">Add Employee</h3></Card.Header>
                    <Form>
                        <Form.Group style={divStyle} controlId="formFirstName">
                            <Form.Label>First Name: </Form.Label>
                            <Form.Control type="text" name="firstName" placeholder="First Name"
                             value={this.state.firstName || ''} onChange={this.changeHandler} />
                        </Form.Group>
                        <Form.Group style={divStyle} controlId="formLastName">
                            <Form.Label>Last Name: </Form.Label>
                            <Form.Control type="text" name="lastName" placeholder="Last Name" 
                             value={this.state.lastName || ''} onChange={this.changeHandler}/>
                        </Form.Group>
                        <Form.Group style={divStyle} controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" name="emailId" placeholder="Email Address" 
                             value={this.state.emailId || ''} onChange={this.changeHandler}/>
                        </Form.Group>
                        <Form.Group style={divStyle} controlId="formPasswordId">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="passwordId" placeholder="Enter Password" 
                             value={this.state.passwordId || ''} onChange={this.changeHandler}/>
                        </Form.Group>
                        <Form.Group style={divStyle} controlId="formRoleId">
                            <Form.Label>Role</Form.Label>
                            <Form.Control type="text" name="roleId" placeholder="Enter Role" 
                             value={this.state.roleId || ''} onChange={this.changeHandler}/>
                        </Form.Group>
                    </Form>
                    <div>
                        <Button style={divvStyle} variant="primary" onClick={this.saveEmployee}>Save</Button>{' '}
                        <Button style={divvStyle} variant="danger" onClick={this.cancel}>Cancel</Button>{' '}
                        <br/>
                    </div>
                </Card>
                </Col>
                <Col/>
                </Row>
            </Container>

            // <div>
            //     <div className="container">
            //         <div className="row">
            //             <div className="card col-md-6 offset-md-3 offset-md-3">
            //                 <h3 className="text-center">Add Employee</h3>
            //                 <div className="card-body">
            //                     <form>
            //                         <div className="form-group">
            //                             <label>First Name: </label>
            //                             <input placeholder="First Name" name="firstName" className="form-control"
            //                                 value={this.state.firstName} onChange={this.changeFirstNameHandler} />
            //                         </div>
            //                         <div className="form-group">
            //                             <label>Last Name: </label>
            //                             <input placeholder="Last Name" name="lastName" className="form-control"
            //                                 value={this.state.lastName} onChange={this.changeLastNameHandler} />
            //                         </div>
            //                         <div className="form-group">
            //                             <label>Email Id: </label>
            //                             <input placeholder="Email Address" name="emailId" className="form-control"
            //                                 value={this.state.emailId} onChange={this.changeEmailHandler} />
            //                         </div>
            //                         <button className="btn btn-sucess" onClick={this.saveEmployee}>Save</button>
            //                         <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft: "10px"}}>Cancel</button>
            //                     </form>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default CreateEmployeeComponent;