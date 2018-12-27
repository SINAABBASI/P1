import React ,{Component} from 'react'
import {View,Text} from "react-native";
import Input from '../component/Input/Input'
import { addItem } from '../store/actions/items';
import {connect} from 'react-redux'
class shareItem extends Component{
    addItemHandeler = (name)  => {
        this.props.onAddItem(name);
    }   
    render(){
        return(
            <View>
                <Input onItemAdded ={this.addItemHandeler}/>
            </View>
        );
    }
} 
const mapDispachToProps = (dispatch) =>{
    return{
        onAddItem : (name) => dispatch(addItem(name))
    }
}
export default connect(null,mapDispachToProps)(shareItem);
