import React from 'react'
import {Text,View,Button} from 'react-native'
import LoginInput from '../components/loginInput'
import {connect} from 'react-redux'
import { logInUser } from '../redux/action';

class loginScreen extends React.Component{
    state = {
        userName:'',
        password:'',
    }
    static navigationOptions = {
        header:null,
    }

    userNameInput = (userName) => {this.setState({userName})}
    passwordInput = (password) => {this.setState({password})}

    _onSubmit = () => {
        this.props.login(this.state.userName,this.state.password)
    }

    render(){
        return(
                <LoginInput {...this.state} userNameInput = {this.userNameInput} passwordInput={this.passwordInput} onSubmit={this._onSubmit}/>
        )
    }
}

export default connect (null,{login:logInUser})(loginScreen)