import React from 'react';
import {
    View,
    Button,
    Text,
    StyleSheet,
    TextInput,
    CameraRoll
} from 'react-native';

export default class Input extends React.Component{
  state = {
    val : ""
  };
  
  inputChangeHandeler = (val) => {
    this.setState({
      val : val
    });
  };

  submitButtonHandeler = () =>{
  
    if(this.state.val.trim() === ""){
      return;
    }
    this.props.addItem(this.state.val);
    this.setState(() =>{
      return{
        val : ""
      }
    })
  };
  
  render(){
    return(
      <View style={styles.incontainer}> 
          <TextInput 
            style = {styles.tin}
            placeholder = "Please Insert !!!"
            value = {this.state.val}
            onChangeText = {this.inputChangeHandeler}
          />
          <Button
            style = {styles.bin}
            title = "ADD"
            color = 'pink'
            accessibilityLabel = "Please Add Some order Gent!"
            onPress = {this.submitButtonHandeler}
          />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  tin :{
    borderColor : 'black', 
    width : '70%'
  },
  bin: {
    width : '30%',
  },
  incontainer:{
    width : '100%',
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center'
  }
});
