import {LOGIN} from '../configuration'
import { LOG_IN_REJECTED } from '../redux/action';



export const login = async (email,password) => {
    try{
        const data = {
            email:email,
            password:password,
        }
        const returned = await fetch(LOGIN,{
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
