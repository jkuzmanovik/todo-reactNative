import React from 'react'
import SignupInput from '../components/signupInput'
import {connect} from 'react-redux'
import { logInUser } from '../redux/action';
import {validateInput} from '../helpers'

class signupScreen extends React.Component{

    static navigationOptions = {
        headerTitle:'Sign up',
    }

    state = {
        fetching:false,
        userName:'',
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        inputFormValid:false,
        err:{},
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.token)
            this.props.navigation.navigate('todo')
    }


    _onSubmit = async () => {
            try{
            const data = {
                userName:this.state.userName,
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                email:this.state.email,
                password:this.state.password,
            }
            const inputFormValid =  validateInput(data)
            await this.props.login(data)
            }catch(err){
                this.setState({err})
            }
        }

    textInput = field => value => { this.setState({[field]:value}) }


    render(){
        return(
            <SignupInput {...this.state} textInput = {this.textInput} onSubmit = {this._onSubmit} />
        )
    }
}

const mapStateToProps = ({user}) => ({
    token:user.token,
    userId:user.userId,
    fetching:user.fetching,
    err:user.err,
})


export default connect (mapStateToProps,{login:logInUser})(signupScreen)