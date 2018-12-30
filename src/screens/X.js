import React, {Component} from "react";
import { View,Text ,Image} from "react-native";
import { Navigation } from 'react-native-navigation';
export default class X extends Component{
    
    render(){
        return (
            <View style= { {height : '100%' ,width : '80%',backgroundColor : 'white'}}>
                <View style = {{height : '35%' ,width :'80%'} }>
                    <Text>Hello</Text>
                    <Image source = {require("./../assets/Sina.png")}  style={{marginTop : '25%',marginBottom : '75%',width:45, height: 45,alignSelf : 'center'}}/>
                </View>
            </View>
        );
    }
}