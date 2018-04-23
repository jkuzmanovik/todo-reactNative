import {validateBody,loginSchema} from './joi'


export const validateInput = (data) => {
    const result = validateBody(data,loginSchema)
    if(result.error){
         throw new Error (result.error.details[0].path)
    }
    return true
}