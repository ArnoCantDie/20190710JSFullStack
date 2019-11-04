
import * as TYPES from '../action-types';
import { Dispatch, Store } from 'redux';
import { validate, register, login, logout } from '../../api/profile';
// TypeThunkFunction
import {TypeAnyObject, TypeThunkFunction} from "../typing/common"
import { push } from 'connected-react-router';
import { message } from 'antd';
export default {
    validate() {
        return {
            type: TYPES.VALIDATE,
            payload: validate()
        }
    },
    register(values: TypeAnyObject): TypeThunkFunction {
        return async function (dispatch: Dispatch) {
            let result: TypeAnyObject = await register(values);
            if (result.code == 0) {
                dispatch(push('/login'));
            } else {
                message.error(result.error);
            }
        }
    },
    login(values: TypeAnyObject): TypeThunkFunction {//redux-thunk
        return async function (dispatch: Dispatch) {
            let result: TypeAnyObject = await login(values);
            if (result.code == 0) {
                dispatch(push('/profile'));
            } else {
                message.error(result.error);
            }
        }
    },
    logout() {
        return {
            type: TYPES.LOGOUT,
            payload: logout()
        }
    },
}