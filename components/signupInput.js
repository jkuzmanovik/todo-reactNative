import React from 'react'
import {Text,View,TextInput,StyleSheet,} from 'react-native'
import {FormLabel,FormInput, FormValidationMessage,Button,} from 'react-native-elements'
import PropTypes from 'prop-types'

const signup = (props) => (
    <View>
        <View>
            <FormLabel>Username </FormLabel>
            <FormInput  placeholder='Please enter your Username' value = {props.userName}  onChangeText = {props.textInput('userName')} autoCapitalize = {'none'}  />
            <FormLabel>FirstName </FormLabel>
            <FormInput  placeholder='Please enter your firstName' value = {props.firstName} onChangeText = {props.textInput('firstName')}/>
            <FormLabel>LastName </FormLabel>
            <FormInput  placeholder='Please enter your lastName' value = {props.lastName} onChangeText = {props.textInput('lastName')}/>
            <FormLabel>Email </FormLabel>
            <FormInput  placeholder='Please enter your email' value = {props.email} onChangeText = {props.textInput('email')} autoCapitalize = {'none'}/>
            <FormLabel>Password </FormLabel>
            <FormInput secureTextEntry placeholder='Please enter your passowrd' value = {props.password} onChangeText = {props.textInput('password')} autoCapitalize = {'none'}/>
        </View>
    </View>
)

// checkError = (props,input) =>{
//     const errorMessage = props.err.message
//     if(errorMessage && errorMessage === input)
//         return <FormValidationMessage>{"Missing  " + errorMessage }</FormValidationMessage>
//     return null
// }

signup.propTypes = {
    textInput: PropTypes.func.isRequired,
    userName: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
}

export default signup 