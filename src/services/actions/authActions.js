import { LOGIN, LOGOUT } from "../types/authTypes";

export function login(username, password) {
    return {
        "type": LOGIN,
        "payload": {username: username, password: password}
    };
}