import React ,{Component} from 'react'
import {View,Text} from "react-native";
import {connect} from 'react-redux'
import List from '../component/ListItem/List'
import { Navigation } from 'react-native-navigation';

class FindItem extends Component{
   
    constructor(props){
        super(props)
        Navigation.events().bindComponent(this);
    }   
    componentWillUnmount() {
        if (this.navigationEventListener) {
            this.navigationEventListener.remove();
        }
    }
    navigationButtonPressed({ MenuBut }){
        Navigation.mergeOptions(this.props.componentId,{
            sideMenu: {
               left : {
                    visible : true,   
               }
            }
        })
    }
    componentDidDisappear = (event) =>{
        Navigation.mergeOptions(this.props.componentId,{
            sideMenu: {
               left : {
                    visible : false,   
               }
            }
        })
    }


    onSelectedHandeler = (key) => {
        const temp = this.props.lists.find(item => {
            return key === item.key
        })
        Navigation.push(this.props.componentId,{    
            component:{
                name : 'P1.itemDetails',
                passProps: {
                    selectedItem : temp
                },
                options :{
                    customTransition: {
                        animations: [
                            { type: 'sharedElement', fromId: 'image1', toId: 'image2', startDelay: 0, springVelocity: 0.2, duration: 0.5 }
                        ],
                        duration: 0.8
                    },
                    topBar : {
                        title :{
                            text : temp.value
                        }
                    }
                }
            }
        })

    }
    render(){
        return(
            <View>
                <List lists = {this.props.lists} selectedItem = {this.onSelectedHandeler}/>
            </View>
        );
    }
} 
const mapStateToProps = (state) =>{
    return {
        lists : state.lists_part.lists
    };
}

export default connect(mapStateToProps)(FindItem);