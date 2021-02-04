import React, {Component} from 'react';

import {Jumbotron} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

class Welcome extends Component {

    constructor(props){
        super(props);
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);   
        this.state={
            welcomeMessage : ''
        }       
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this); 
    }

    render(){
        const heading = "Welcome to Employee Management App";
        const quote = "We contribute to human society by creating the best products and services based on human resources and technology.";
        const footer = "S Company";
        return (
            <>
            <Jumbotron className="bg-info text-white" style={{marginTop: "10px"}}>
                <h3>Welcome {this.props.match.params.name}.</h3>
                <h1>{heading}</h1>
                <blockquote className="blockquote mb-0">
                    <p>{quote}</p>
                    <footer className="blockquote-footer">
                        {footer}
                    </footer>
                </blockquote>
            </Jumbotron>
            <div className="container">
                Click here to get a customized welcome message.
                <button type="button" className="btn btn-success" 
                    onClick={this.retrieveWelcomeMessage}>Get Welcome Message</button>
            </div>
            <div className="container">
                {this.state.welcomeMessage}
            </div>
            </>
        );
    }

    retrieveWelcomeMessage() {
        // EmployeeService.executeHelloWorldService()
        // .then( response => this.handleSuccessfulResponse(response) )

        // EmployeeService.executeHelloWorldBeanService()
        // .then( response => this.handleSuccessfulResponse(response) )
        // .catch

        EmployeeService.executeHelloWorldPathVariableService(this.props.match.params.name)
        .then( response => this.handleSuccessfulResponse(response) )
        .catch( error => this.handleError(error))
    }

    handleSuccessfulResponse(response){
        this.setState({welcomeMessage : response.data.message})
    }

    handleError(error){
        let errorMessage = '';

        if(error.message)
            errorMessage += error.message;

        if(error.response && error.response.data){
            errorMessage += error.response.data.message;
        }

        this.setState({welcomeMessage : errorMessage})
    }
}

export default withRouter(Welcome);