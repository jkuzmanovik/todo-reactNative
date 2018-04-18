import {LOGIN} from '../configuration'


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
        const Token = await returned.json()
        return Token
    }catch(err) {console.log(err)}
}
