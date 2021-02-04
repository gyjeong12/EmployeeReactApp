import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService';
import { withRouter } from 'react-router-dom';
import { store } from '../store';
import { login } from "../services/actions/authActions";
import { connect } from 'react-redux';

class LoginComponent extends Component {

    constructor(props){
        super(props);
        console.log(`Login props loo like: ${JSON.stringify(this.props)}`)
        this.state = {
            username : 'gyjeong',
            password : '',
            hasLoginFailed: false,
            showSuccessMessage: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event){
        console.log(this.state);
        this.setState(
            {
                [event.target.name]
                    :event.target.value
            }
        );
    }

    loginClicked() {
        // gyjeong, dummy
        if(this.state.username === 'gyjeong' && this.state.password==='dummy'){
            this.props.setAuthenticated(true);
            const loginRequest = login(this.state.username, this.state.password);
            console.log(`Your login request looks like: ${JSON.stringify(loginRequest)}`)
            console.log(`And your props look like: ${JSON.stringify(this.props)}`);
            this.props.dispatch(loginRequest);
            //store.dispatch({type: 'LOGIN',username: this.state.username, password: this.state.password});
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);           
            this.props.history.push(`/welcome/${this.state.username}`);
        }
        else{
            this.setState({showSuccessMessage:false });
            this.setState({hasLoginFailed:true });
        }
    }
    
    render() {   
        return (
            <div>
                <h1>Login</h1>
                <div style={{marginTop: '15px'}} className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    <div>
                        User Name: <input type="text" name="username" value={this.state.username}
                            onChange={this.handleChange} />
                    </div>
                    <div style={{marginTop: '15px'}}>
                        Password: <input type="password" name="password" value={this.state.password}
                            onChange={this.handleChange} />
                    </div>
                    <button type="button" className="btn btn-primary btn-lg" onClick={this.loginClicked} style={{marginTop: '15px'}}>Login</button>
                </div>
            </div>
        );
    }
}

const exportProps = (state) => {
    return {
        auth: state.auth
    };
}

const mapDispatchToProps = dispatch => {
    return {
      // dispatching actions returned by action creators
      dispatch: dispatch
    }
  }

export default withRouter(connect(exportProps, mapDispatchToProps)(LoginComponent));