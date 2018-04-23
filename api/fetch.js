import {LOGIN,SIGNUP} from '../configuration'

import { LOG_IN_REJECTED } from '../redux/action';



export const login = async (data) => {
    try{
        console.log('vlagam vo login ja')
        const URL = null
        if(data.firstName)  
            URL = SIGNUP 
        else
            URL = LOGIN 
        console.log(URL)
        const returned = await fetch(URL,{
            method: 'POST',
            body:JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
              })
        })
        // if(!returned.ok)
        //     throw new Error(returned.ok)
        const Token = await returned.json()
        return Token
    }catch(err){
        throw new Error(err)
    } 
}
