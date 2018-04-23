import {LOGIN,SIGNUP} from '../configuration'

import { LOG_IN_REJECTED } from '../redux/action';



export const login = async (data) => {
    try{
        const URL = null
        if(data.userName)  
            URL = SIGNUP 
        else
            URL = LOGIN 
        const returned = await fetch(URL,{
            method: 'POST',
            body:JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
              })
        })
        // if(!returined.ok)
        //     throw new Error(returned.ok)
        const Token = await returned.json()
        return Token
    }catch(err){
        throw new Error(err)
    } 
}
