import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from "react-redux";
import { deleteItem } from "./../store/actions/items";
import { Navigation } from 'react-native-navigation';
class ItemDetails extends React.Component{
  
  deleteHandeler = () =>{
    this.props.onDelete(this.props.selectedItem.key);
    Navigation.pop(this.props.componentId) 
  }
  render(){
    return(
        <View style = {{flex : 1}}>

          <View style = {styles.Content}>
            <Image source = {this.props.selectedItem.image} style = {styles.img}/>
            <Text style ={{ fontSize : 24,textAlign :'center'}}>{this.props.selectedItem.value}</Text>
          </View>
          <View>
            <TouchableOpacity onPress = {this.deleteHandeler} >
              <Icon name="ios-trash" color="red" size={30} />
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  Content :{
    alignItems:'center',
    height: 50,
    width : 50,
  },
  image :{
    height: 50,
    width : 50,

  }
})

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete : (key) => dispatch(deleteItem(key))
  }
}

export default connect(null,mapDispatchToProps)(ItemDetails);