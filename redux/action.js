import {login} from '../api/fetch'
export const LOG_IN_SENT = 'LOG_IN_SENT'
export const LOG_IN_FULFILLED = 'LOG_IN_FULFILLED'
export const LOG_IN_REJECTED = 'LOG_IN_REJECTED'


//async function for login user
export const logInUser = (data) => async dispatch => {
    dispatch({type:LOG_IN_SENT})
    try{
        const {token,userId} = await login(data)
        dispatch({type:LOG_IN_FULFILLED,payload:{token,userId}})
    }catch(err){
        dispatch({type:LOG_IN_REJECTED,payload:{err:true}})
    }
} 
