import React , {Component} from 'react'
import {Text ,View,Button} from 'react-native'
import startTabs from './startMainTabs';
export default class Auth extends Component{
    loginHandeler=()=>{
        startTabs()
    }
    render(){
        return(
            <View>
                <Text>
                    Auth Screen!
                </Text>
                <Button title = "Login" onPress = {this.loginHandeler}/>
            </View>
        );
    }
}