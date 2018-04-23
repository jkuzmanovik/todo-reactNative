/*
GENERIC FUNCTION FOR VALIDATING MONGOOSE ID
FROM ANY SPECIFIED PARAM NAME
*/


// const Joi = require('joi')

import Joi from 'react-native-joi'

export const validateBody = (data,schema) => {
                const result = Joi.validate(data,schema)
                return result;
       }
    

export const loginSchema = Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })


export const signupSchema = Joi.object().keys({
        userName: Joi.string().required(),
        firstName: Joi.string(),
        lastName: Joi.string(),
        email: Joi.string().email().required(),
        password:Joi.string().required()
      })

//     schemas: {
//         signupSchema:  Joi.object().keys({
//             userName: Joi.string().required(),
//             firstName: Joi.string(),
//             lastName: Joi.string(),
//             email: Joi.string().email().required(),
//             password:Joi.string().required()
//         }),
//         userOptionalSchema:  Joi.object().keys({
//             userName: Joi.string(),
//             firstName: Joi.string(),
//             lastName: Joi.string(),
//             email: Joi.string().email(),
//             password:Joi.string()
//         }),
//         logInSchema: Joi.object().keys({
//             email: Joi.string().email().required(),
//             password: Joi.string().required()
//         }),

//         todoSchema: Joi.object().keys({
//             title: Joi.string().required(),
//             context:Joi.string(),
//             isFinished:Joi.boolean()
//         }),
//         todoOptionalSchema: Joi.object().keys({
//             title: Joi.string(),
//             context:Joi.string(),
//             isFinished:Joi.boolean()
//         }),
       
//         idSchema: Joi.object().keys({
//             param: Joi.string().regex(/^[0-9a-fA-f]{24}$/).required()
//         })
//     }
// }
