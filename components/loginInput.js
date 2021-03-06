import React from 'react'
import {Text,View,TextInput,StyleSheet,} from 'react-native'
import {FormLabel,FormInput, FormValidationMessage,Button,} from 'react-native-elements'
import PropTypes from 'prop-types'
import { login } from '../api/fetch';

const LoginInput = (props) => (
    <View style={styles.container}>
        <View style={styles.inputs}>
            <FormLabel>Username </FormLabel>
            <FormInput   errorMessage = {props.err}       placeholder='Please enter your Username'  onChangeText = {props.userNameInput} autoCapitalize = {'none'}  />
            {checkError(props,'email')}
            <FormLabel>password </FormLabel>
            <FormInput placeholder='Please enter your Password' onChangeText = {props.passwordInput} secureTextEntry autoCapitalize = {'none'} />
            {checkError(props,'password')}
        </View>
        <View style={styles.footer}>
            {loginButton(props)}
        </View>
        <View>
                <Button title="SIGN UP" rounded  large backgroundColor='grey' onPress={props.signup} />
        </View>
    </View>
)

checkError = (props,input) =>{
    const errorMessage = props.err.message
    if(errorMessage && errorMessage === input)
        return <FormValidationMessage>{"Missing  " + errorMessage }</FormValidationMessage>
    return null
}


//Conditional rendering if is in proces of fetching display loading Button
 loginButton = (props) => {
    if(props.fetching)
        return(
            <Button loading large backgroundColor='#7e8a9e' rounded  onPress={props.onSubmit} />
             )
       return(
                <Button large backgroundColor='#7e8a9e' rounded title='login' onPress={props.onSubmit} />
               )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#314668',
    },
    inputs:{
        flex:1,
        padding:10,
        alignItems:'center',
        justifyContent:'flex-end',
        width:300,
        height:100,
    },
    footer:{
        padding:10,
        margin:10,
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',
    },
})

LoginInput.propTypes = {
    userName: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    userNameInput: PropTypes.func.isRequired,
    passwordInput: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired,
    inputFormValid: PropTypes.bool.isRequired,
}
export default LoginInput