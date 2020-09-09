import React from "react";
import React, {Component} from 'react';
import {  View,  Button} from 'react-native';



class Quote extends Component{
  state = {
    randcolors=['#93867F', '#343633', '#7D70BA', '#2E86AB', '#890620'],
    selectedColor: '#7D70BA'}; 
   
    constructor() {
        super();
          this.state = {
       randcolors=['#93867F', '#343633', '#7D70BA', '#2E86AB', '#890620'],
       selectedColor: '#93867F'}; 
          }
          ChangeColorFunction=()=>
       {
         var item = this.state.randcolors[Math.floor(Math.random()*this.state.randcolors.length)];
         this.setState({
         selectedColor: item,
         })}
        

  render(){    
  return(
         <View  style={[{backgroundColor: this.state.selectedColor}]}>
         
        <Button title="change color"  onPress={()=>this.ChangeColorFunction()}/> 
        
         </View>
      )
  }

}
export default Quote