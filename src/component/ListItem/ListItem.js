import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

export default class Listitem extends Component{
    
  render(){
    return(
      <TouchableOpacity onPress={this.props.itemPressed}>
        <View style = {styles.listitem}>
          <Image resizeMode ={"contain" }source = {this.props.image} style = {styles.img}/>
          <Text>
            {this.props.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  listitem :{
    flex : 1,
    flexDirection: 'row',
    width : '100%',
    padding: 10,
    marginTop: 10,
    backgroundColor: '#eee'
  },
  img :{
    height: 30,
    width :30,
    marginRight : 5
  }
});
