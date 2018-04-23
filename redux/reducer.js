import {combineReducers} from 'redux'
import {LOG_IN_SENT, LOG_IN_FULFILLED, LOG_IN_REJECTED} from './action'

const initialState = {
    fetching:false,
    token:'',
    userId:'',
    err:null,
    
}

const merge = (prev, next) => Object.assign({}, prev, next)

const userReducer = (state = initialState,action) => {

    switch(action.type){
        case LOG_IN_SENT:
            return merge(state,{fetching:true})
        case LOG_IN_FULFILLED:
            return merge(state,{token:action.payload.token,userId:action.payload.userId,fetching:false,})
        case LOG_IN_REJECTED:
            return merge(state,{err:true,fetching:false,})
        default:
            return merge(state,{})
    }
}

const reducer = combineReducers({
    user:userReducer,
})

export default reducer 