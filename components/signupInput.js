import React from 'react'
import {Text,View,TextInput,StyleSheet,} from 'react-native'
import {FormLabel,FormInput, FormValidationMessage,Button,} from 'react-native-elements'
import PropTypes from 'prop-types'

const Signup = (props) => (
            <View>
                <FormLabel>Username </FormLabel>
                <FormInput  placeholder='Please enter your Username' value = {props.userName}  onChangeText = {props.textInput('userName')} autoCapitalize = {'none'}  />
                {checkError(props,'userName')}
                <FormLabel>FirstName </FormLabel>
                <FormInput  placeholder='Please enter your firstName' value = {props.firstName} onChangeText = {props.textInput('firstName')}/>
                {checkError(props,'firstName')}
                <FormLabel>LastName </FormLabel>
                <FormInput  placeholder='Please enter your lastName' value = {props.lastName} onChangeText = {props.textInput('lastName')}/>
                {checkError(props,'lastName')}
                <FormLabel>Email </FormLabel>
                <FormInput  placeholder='Please enter your email' value = {props.email} onChangeText = {props.textInput('email')} autoCapitalize = {'none'}/>
                {checkError(props,'email')}
                <FormLabel>Password </FormLabel>
                <FormInput secureTextEntry placeholder='Please enter your passowrd' value = {props.password} onChangeText = {props.textInput('password')} autoCapitalize = {'none'}/>
                {checkError(props,'password')}
                {signupButton(props)}
            </View>
)

signupButton = (props) => {
    if(props.fetching)
        return(
            <Button loading large backgroundColor='#7e8a9e' rounded  onPress={props.onSubmit} />
             )
       return(
                <Button large backgroundColor='#7e8a9e' rounded title='signup' onPress={props.onSubmit} />
               )
}



checkError = (props,input) =>{
    const errorMessage = props.err.message
    if(errorMessage && errorMessage === input)
        return <FormValidationMessage>{"Missing  " + errorMessage }</FormValidationMessage>
    return null
 }

Signup.propTypes = {
    textInput: PropTypes.func.isRequired,
    userName: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    fetching:PropTypes.bool.isRequired,
//    err: PropTypes.object.isRequired, 
}

export default Signup 