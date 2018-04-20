import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import{createStackNavigator} from 'react-navigation'
import loginScreen from './screens/login'
import todoScreen from './screens/todo'
import {Provider} from 'react-redux'
import {store} from './redux/store'



const MainNavigator = createStackNavigator({
  'login':loginScreen,
  'todo':todoScreen
},{
  initialRoute:'login',
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
          <MainNavigator />
      </Provider>
    )
  }
}
