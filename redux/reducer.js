import {combineReducers} from 'redux'
import {LOG_IN_SENT, LOG_IN_FULFILLED, LOG_IN_REJECTED} from './action'


const userReducer = (state = {},action) => {
    switch(action.type){
        case LOG_IN_FULFILLED:
            return state
    }
}

const Reducer = combineReducers({
    user:userReducer,
})

export default userReducer 