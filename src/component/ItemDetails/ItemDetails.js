import React from 'react'
import {
    View,
    Text,
    Modal,
    Button,
    Image,
    StyleSheet
} from 'react-native';


export default class ItemDetails extends React.Component{
  render(){
    let modalContent=null;
    if(this.props.selectedItem !== null){
      modalContent = (
        <View style = {styles.modalContent}>
          <Image source = {this.props.selectedItem.image} style = {styles.img}/>
          <Text style ={{ fontSize : 24,textAlign :'center'}}>{this.props.selectedItem.value}</Text>
        </View>
      )
    }
    return(
      <Modal 
      onRequestClose = {this.props.closedItem}
      visible={this.props.selectedItem !== null}
      animationType = 'slide'>
        <View>
          {modalContent}
          <View>
            <Button title= "Delete" color="red" onPress = {this.props.deletedItem}/>
            <Button title= "Close" onPress = {this.props.closedItem}/>
          </View>
        </View>  
      </Modal>
    );
  }
}


const styles = StyleSheet.create({
  modalContent :{
    alignItems:'center',
    margin :10,
  },
  image :{
    height: 200,
  }
})