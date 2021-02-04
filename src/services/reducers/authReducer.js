import { LOGIN, LOGOUT } from "../types/authTypes";

export function authReducer(state = null, action) {

    if(action.type === LOGIN) {
        console.log(`Login request acknowledged - updating state with: ${JSON.stringify(action.payload)}`)
        state = action.payload;
    }

    if(action.type === LOGOUT) {
        state = null;
    }

    console.log(`The state returned by the authReducer is ${JSON.stringify(state)}`)
    return state;
}