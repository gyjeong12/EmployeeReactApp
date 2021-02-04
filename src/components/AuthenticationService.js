import axios from 'axios';

class AuthenticationService {

    registerSuccessfulLogin(username, password){
        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password);
        
        // this.setState({user: username, pass: password});

        console.log('registerSuccessfulLogin');
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors(basicAuthHeader);
        console.log('setupAxiosInterceptors OK');
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser');
        if (user === null) return false;
        return true;
    }

    basicAuth() {
        if(this.state.user && this.state.pass) {
            return `Basic ${window.btoa(this.state.user + ":" + this.state.pass)}`;
        } else {
            return false;
        }
    }

    setupAxiosInterceptors(basicAuthHeader){
        // console.log(`This is your basic ath: ${basicAuthHeader}`);       
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()){
                    config.headers.authorization = basicAuthHeader
                }
                return config;
            }
        );
    }
}

export default new AuthenticationService();