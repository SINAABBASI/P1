/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  AsyncStorage
} from 'react-native';

import Input from './src/component/Input/Input';
import List from './src/component/ListItem/List';
import ItemDetails from './src/component/ItemDetails/ItemDetails';
import {connect} from 'react-redux'
import { addItem, deleteItem, selectItem, deselectItem } from './src/store/actions/items';

class App extends Component{
  addItem = (val) => {
    this.props.onAddItem(val)
  }
  selectedItem = (key) => {
    this.props.onSelectItem(key)
  }
  deletedItem = () =>{
    this.props.onDeleteItem()
  }
  closedItem = () => {
    this.props.onDeselectItem()
  }
  render() {
    return (
      <View style={styles.container}> 
        <ItemDetails 
        selectedItem = {this.props.selectedItem} 
        deletedItem = {this.deletedItem}
        closedItem = {this.closedItem} />
        <Input addItem = {this.addItem} />
        <List lists = {this.props.lists} selectedItem ={this.selectedItem} />
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
const mapStateToProps = (state) => {
  return {
    lists: state.lists_part.lists,
    selectedItem: state.lists_part.selectedItem
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddItem: name => dispatch(addItem(name)),
    onDeleteItem: () => dispatch(deleteItem()),
    onSelectItem: key => dispatch(selectItem(key)),
    onDeselectItem: () => dispatch(deselectItem())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
