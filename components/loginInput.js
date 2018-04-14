import React from 'react'
import {Text,View,TextInput} from 'react-native'
import PropTypes from 'prop-types'

const LoginInput = (props) => (
    <View>
        <TextInput value={props.userName} onChangeText = {props.userNameInput} />
        <TextInput value={props.password} onChangeText = {props.passwordInput} secureTextEntry />
    </View>
)

LoginInput.propTypes = {
    userName: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    userNameInput: PropTypes.func.isRequired,
    passwordInput: PropTypes.func.isRequired,
}
export default LoginInput