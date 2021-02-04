import React, { Component } from 'react';
import EmpApp from './components/EmpApp';
import './App.css';
import { Provider } from 'react-redux';
import { store } from "./store";
import { login } from "./services/actions/authActions";

class App extends Component {

  render(){
 
    //store.dispatch(login("user", "pass"));

    return (
      <Provider store={store}>
      <div className="App">
        <EmpApp />
      </div>
      </Provider>
    );  
  }
}

export default App;
