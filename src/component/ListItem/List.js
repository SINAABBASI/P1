import React from 'react'
import {
  Text,
  View,
  ScrollView,
  FlatList
} from 'react-native'
import ListItem from './ListItem'
export default class List extends React.Component{

  render(){
    return(
      <FlatList 
      // ItemSeparatorComponent={Platform.OS !== 'android' && ({highlighted}) => (
      //   <View style={[style.separator, highlighted && {marginLeft: 0}]} />
      // )}
      style = {{width :'100%'}}
      data = {this.props.lists}
      renderItem = {(info) =>
        <ListItem 
        name = {info.item.value}
        image = {info.item.image}
        itemPressed = {() => {this.props.selectedItem(info.item.key)}}
        />  
      }
      />
    );
  }
};
