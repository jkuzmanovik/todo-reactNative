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

    _onSubmit = async () => {
        await this.props.login(this.state.userName,this.state.password)
    }
    render(){
        return(
                <LoginInput {...this.state} fetching = {this.props.fetching}  userNameInput = {this.userNameInput} passwordInput={this.passwordInput} onSubmit={this._onSubmit}/>
        )
    }
}

const mapStateToProps = state => ({
    token:state.user.token,
    userId:state.user.userId,
    fetching:state.user.fetching,
    err:state.user.err,
})


export default connect (mapStateToProps,{login:logInUser})(loginScreen)