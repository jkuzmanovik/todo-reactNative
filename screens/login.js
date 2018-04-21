import React from 'react'
import {Text,View,Button} from 'react-native'
import LoginInput from '../components/loginInput'
import {connect} from 'react-redux'
import { logInUser } from '../redux/action';
import {validateInput} from '../helpers'

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
        const inputFormValid =  validateInput(this.state.userName,this.state.password)
        await this.props.login(this.state.userName,this.state.password)
        }catch(err){
            this.setState({err})
        }
    }
    render(){
        return(
                <LoginInput {...this.state} fetching = {this.props.fetching}   userNameInput = {this.userNameInput} passwordInput={this.passwordInput} onSubmit={this._onSubmit}/>
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