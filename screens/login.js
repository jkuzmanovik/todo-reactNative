import React from 'react'
import {Text,View,Button} from 'react-native'
import LoginInput from '../components/loginInput'
import {connect} from 'react-redux'
import { logInUser } from '../redux/action';
import {validateInput} from '../helpers'
import {loginSchema} from '../helpers/joi'

class loginScreen extends React.Component{
    state = {
        userName:'',
        password:'',
        inputFormValid:false,
        err:'',
    }

    //disble header back Button
    static navigationOptions = {
        header:null,
    }

    //If there is token navigate to todo screen
    componentWillReceiveProps(nextProps){
        if(nextProps.token)
            this.props.navigation.navigate('todo')
    }

    //hadnle user Input


    userNameInput =  (userName) => {
         this.setState({userName,})
    }
    passwordInput = (password) => {
        this.setState({password,})
    }

    //Call login reducer
    _onSubmit = async () => {
        try{
        const data = {
            email:this.state.userName,
            password:this.state.password,
        }
        const inputFormValid =  validateInput(data,loginSchema)
        await this.props.login(data)
        }catch(err){
            this.setState({err})
        }
    }
    signup = () => {
        this.props.navigation.navigate('signup')
    }


    render(){
        return(
                <LoginInput {...this.state} fetching = {this.props.fetching} signup={this.signup}   userNameInput = {this.userNameInput} passwordInput={this.passwordInput} onSubmit={this._onSubmit}/>
        )
    }
}

const mapStateToProps = ({user}) => ({
    token:user.token,
    userId:user.userId,
    fetching:user.fetching,
    err:user.err,
})


export default connect (mapStateToProps,{login:logInUser})(loginScreen)