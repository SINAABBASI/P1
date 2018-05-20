/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  AsyncStorage
} from 'react-native';

import ListItem from './src/component/ListItem/ListItem';
import Input from './src/component/Input/Input';
import List from './src/component/ListItem/List';
import img from './src/assets/Sina.png';
import ItemDetails from './src/component/ItemDetails/ItemDetails';

export default class App extends Component{
  constructor(){
    super();
    
  } 
  state = {
    lists : [],
    selectedItem : null,
  }
  componentWillMount(){
    AsyncStorage.getItem('state')
    .then((saveState) => {
      console.log('state loaded');      
      if(saveState === null){
        this.setState({
          lists : [],
          selectedItem : null
        })
      }else{
        this.setState(JSON.parse(saveState));
      }
    }).catch((error) =>{
      console.log('state not loaded');
    })
  }
  componentWillUnmount(){
    this.saveState();
  }

  saveState(){
    AsyncStorage.setItem('state',JSON.stringify(this.state))
  }

  addName = (val) => {
    this.setState(prevState => {
      return{
        lists : prevState.lists.concat({
          key : Math.random().toString(),
          value : val,
          image : img
        })
      };          
    })
  }
  selectedItem = (key) => {
    
    this.setState(prevState => {
      return{
        selectedItem : prevState.lists.find(item => {
          return item.key === key;
        })
      }
    })
  }
  deletedItem = () =>{
    this.setState(prevState => {
      return {
        lists : prevState.lists.filter((item) => {
          return item.key !== prevState.selectedItem.key; 
        }),
        selectedItem : null
      }
    })
  }
  render() {
    return (
      <View style={styles.container}> 
        <ItemDetails 
        selectedItem = {this.state.selectedItem} 
        deletedItem = {this.deletedItem}
        closedItem = {() => {
          this.setState({
            selectedItem : null,
          });
        }} />
        <Input addName = {this.addName} />
        <List lists = {this.state.lists} selectedItem ={this.selectedItem} />
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding :26, 
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
