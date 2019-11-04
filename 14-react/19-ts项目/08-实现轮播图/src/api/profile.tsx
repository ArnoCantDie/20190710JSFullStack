import axios from './';
import {TypeAnyObject} from "../store/typing/common"
export function validate() {
    return axios.get('/validate');
}
export function register(values: TypeAnyObject) {
    return axios.post('/register', values);
}
export function login(values: TypeAnyObject) {
    return axios.post('/login', values);
}
export function logout() {
    return axios.get('/logout');
}