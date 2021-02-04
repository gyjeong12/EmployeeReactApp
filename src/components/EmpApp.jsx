import React,{ Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute';
import ListEmployeeComponent from './ListEmployeeComponent';
import ErrorComponent from './ErrorComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import CreateEmployeeComponent from './CreateEmployeeComponent';
import ViewEmployeeComponent from './ViewEmployeeComponent';
import UpdateEmployeeComponent from './UpdateEmployeeComponent';
import Welcome from './Welcome';
import LoginComponent from './LoginComponent';
import LogoutComponent from './LogoutComponent';
// import AuthenticationService from './AuthenticationService';

class EmpApp extends Component {

    constructor(props) {
        super(props);
        this.state = { authenticated: false };
    }

    componentDidUpdate() {
        console.log(`Hey, your state changed: ${JSON.stringify(this.state)}`);  
    }


    render() { 
        const setAuthenticated = (authenticated) => {
            this.setState({authenticated: authenticated});
        };

        return (
            <div className="EmpApp">
                <Router>    
                    <>   
                        <HeaderComponent authenticated={this.state.authenticated}/>               
                        <Switch>
                            <Route path="/" exact render={() => <LoginComponent setAuthenticated={setAuthenticated}/>} />
                            <Route path="/login" exact render={() => <LoginComponent setAuthenticated={setAuthenticated}/>} />                
                            <AuthenticatedRoute path="/welcome/:name" exact component={Welcome}/>
                            <AuthenticatedRoute path="/employees" exact render={() => <ListEmployeeComponent setAuthenticated={setAuthenticated}/>} />
                            <AuthenticatedRoute path="/add-employee" exact render={() => <CreateEmployeeComponent setAuthenticated={setAuthenticated}/>} />  
                            <AuthenticatedRoute path="/view-employee/:id" exact render={(props) => <ViewEmployeeComponent {...props} setAuthenticated={setAuthenticated}/>} /> 
                            <AuthenticatedRoute path="/update-employee/:id" exact render={(props) => <UpdateEmployeeComponent {...props} setAuthenticated={setAuthenticated}/>} />
                            <Route path="/logout" exact component={LogoutComponent} />

                            <Route component={ErrorComponent} />
                        </Switch>            
                        {/* <HeaderComponent />               
                        <Switch>
                            <Route path="/" exact component = {LoginComponent} />
                            <Route path="/login" exact component = {LoginComponent} />                
                            <AuthenticatedRoute path="/welcome/:name" exact component={Welcome}/>
                            <AuthenticatedRoute path="/employees" exact component= {ListEmployeeComponent} />
                            <AuthenticatedRoute path="/add-employee" exact component = {CreateEmployeeComponent} />  
                            <AuthenticatedRoute path="/view-employee/:id" exact render={(props) => <ViewEmployeeComponent {...props} />} /> 
                            <AuthenticatedRoute path="/update-employee/:id" exact render={(props) => <UpdateEmployeeComponent {...props} />} />
                            <Route path="/logout" exact component={LogoutComponent} />

                            <Route component={ErrorComponent} />
                        </Switch>      */}
                        <FooterComponent />     
                    </>   
                </Router>
            </div>
        );
    }
}

export default EmpApp;
