import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import AuthenticationService from './AuthenticationService';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class HeaderComponent extends Component {

    constructor(props) {
        super(props);
        console.log(`Header props are: ${JSON.stringify(this.props)}`)
    }

    /*componentDidMount() {
        this.props.dispatch({type: "LOGIN", payload: {user: "test", pass: "test"}});
    }*/

    render() {
        return (
            <header>
                <Navbar bg="dark" variant="dark" >
                    <Navbar.Brand href="/">Employee Management App</Navbar.Brand>
                    <Nav className="mr-auto">                                                       
                        {this.props.authenticated ? <Nav.Link href="/employees">Employees List</Nav.Link> : null }   
                        {this.props.authenticated ? <Nav.Link href="/add-employee">Add Employee</Nav.Link> : null }
                    </Nav>
                    <Nav className="justify-content-end">
                        {!this.props.authenticated ? <Nav.Link href="/login">Login</Nav.Link> 
                            : <Nav.Link href="/logout" onClick={AuthenticationService.logout}>Logout</Nav.Link>}
                    </Nav>
                </Navbar>
            </header>
        );
    }
}

const exportProps = (state) => {
    return {
        auth: state.auth
    };
}
export default withRouter(connect(exportProps)(HeaderComponent));