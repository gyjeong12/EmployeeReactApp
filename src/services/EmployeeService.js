import axios from 'axios';
import AuthenticationService from '../components/AuthenticationService';
import { store } from "../store";
import { useSelector } from "react-redux";

const EMPLOYEE_API_BASE_URL = "http://localhost:8091/api/v1/employees";

class EmployeeService {

    // Test
    executeHelloWorldService(){
        // console.log('executed service');
        return axios.get('http://localhost:8091/api/v1/hello-world');
    }

    executeHelloWorldBeanService(){
        // console.log('executed service');
        return axios.get('http://localhost:8091/api/v1/hello-world-bean');
    }

    executeHelloWorldPathVariableService(name){
        // console.log('executed service');
        return axios.get(`http://localhost:8091/api/v1/hello-world/path-variable/${name}`);
    }

    getEmployees(auth){
        // const user = process.env.REACT_APP_USER
        // const pass = process.env.REACT_APP_PASS

        // console.log(`${user}:${pass}`)

        //const auth = store.getState();
        //const auth = useSelector(state => state);
        console.log(`Auth creds are: ${JSON.stringify(auth)}`)
        //const basicAuthHeader = `Basic ${window.btoa(user + ":" + pass)}`;
        //AuthenticationService.setupAxiosInterceptors(basicAuthHeader);
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    // getEmployees(){
    //     let username = 'gyjeong';
    //     let password = 'dummy';

    //     let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password);

    //     return axios.get(EMPLOYEE_API_BASE_URL,
    //         {
    //             headers : {
    //                 authorization: basicAuthHeader
    //             }
    //         }
    //     );
    // }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        // AuthenticationService.setupAxiosInterceptors();
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        // AuthenticationService.setupAxiosInterceptors();
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
}

export default new EmployeeService()