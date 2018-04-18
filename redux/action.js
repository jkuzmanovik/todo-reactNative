import {login} from '../api/fetch'
export const LOG_IN_SEND = 'LOG_IN_SEND'
export const LOG_IN_FULFILLED = 'LOG_IN_FULFILLED'
export const LOG_IN_REJECTED = 'LOG_IN_REJECTED'



export const logInUser = (username,password) => async dispatch => {
    dispatch({type:LOG_IN_SEND})
    try{
        const {token,userId} = await login(username,password)
        dispatch({type:LOG_IN_FULFILLED})
    }catch(err){
        dispatch({type:LOG_IN_REJECTED})
    }
} 
