import React, { Component } from 'react';

class LogoutComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
            <>
                <h1>Your are logged out</h1>
                <div className="container">
                    Thank you for using our Application.
                </div>
            </>
        );
    }
}

export default LogoutComponent;
