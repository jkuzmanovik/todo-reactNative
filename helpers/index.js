import {validateBody,loginSchema} from './joi'


export const validateInput = (email,password) => {
    const data = {
        email,
        password
    }
    const result = validateBody(data,loginSchema)
    if(result.error){
         throw new Error (result.error.details[0].path)
    }
    return true
}