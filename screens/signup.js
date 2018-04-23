import React from 'react'
import SignupInput from '../components/signupInput'

export default class loginScreen extends React.Component{

    static navigationOptions = {
        headerTitle:'Sign up',
    }

    state = {
        userName:'',
        firstName:'',
        lastName:'',
        email:'',
        password:'',
    }
    textInput = field => value => { this.setState({[field]:value}) }
    render(){
        return(
            <SignupInput {...this.state} textInput = {this.textInput} />
        )
    }
}