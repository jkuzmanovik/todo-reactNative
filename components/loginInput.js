import React from 'react'
import {Text,View,TextInput,StyleSheet,} from 'react-native'
import {FormLabel,FormInput, FormValidationMessage,Button,} from 'react-native-elements'
import PropTypes from 'prop-types'
import { login } from '../api/fetch';

const LoginInput = (props) => (
    <View style={styles.container}>
        <View style={styles.inputs}>
            <FormLabel>Username </FormLabel>
            <FormInput placeholder='Please enter your Username'  onChangeText = {props.userNameInput}  />
            <FormLabel>password </FormLabel>
            <FormInput placeholder='Please enter your Password' onChangeText = {props.passwordInput} secureTextEntry />
        </View>
        <View style={styles.footer}>
            {loginButton(props)}
        </View>
    </View>
)

function loginButton(props) {
    if(props.fetching)
        return(
            <Button loading large backgroundColor='#7e8a9e' rounded  onPress={props.onSubmit} />
        )
        return(    <Button title="LOADING BUTTON" large backgroundColor='#7e8a9e' rounded title='login' onPress={props.onSubmit} />
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
}
export default LoginInput