import React ,{Component} from 'react'
import {View,Text} from "react-native";
import {connect} from 'react-redux'
import List from '../component/ListItem/List'
class FindItem extends Component{
    render(){
        return(
            <View>
                <List lists = {this.props.lists}/>
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