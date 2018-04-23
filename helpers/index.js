import {validateBody} from './joi'


export const validateInput = (data,schema) => {
    const result = validateBody(data,schema)
    if(result.error){
         throw new Error (result.error.details[0].path)
    }
    return true
}