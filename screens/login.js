import React from 'react'
import {Text,View,Button} from 'react-native'
import LoginInput from '../components/loginInput'

export default class loginScreen extends React.Component{
    state = {
        userName:'',
        password:'',
    }

    userNameInput = (userName) => {this.setState({userName})}
    passwordInput = (password) => {this.setState({password})}

    render(){
        return(
            <View>
                <LoginInput {...this.state} userNameInput = {this.userNameInput} passwordInput={this.passwordInput}/>
            </View>
        )
    }
}