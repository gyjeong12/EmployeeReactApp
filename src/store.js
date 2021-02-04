import {createStore, combineReducers } from 'redux';
import { authReducer } from "./services/reducers/authReducer";
const allReducers = combineReducers({
    "auth": authReducer
});

export const store = createStore(allReducers);
// export default createStore(function(state, action){
//     if(state === undefined){
//         return {
//             username : 'gyjeong',
//             password : ''
//         }
//     }
//     if(action.type === 'LOGIN'){
//         return {...state, username:action.username, password:action.password}
//     }
//     return state;
// }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )