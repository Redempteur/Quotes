import React, {Component} from 'react'
import {  View,  Text, Button} from 'react-native'; 
 

class Btn_next extends React.Component { 
   
 
    render (){ 
        return (
            <View style={{marginTop:50 }}> 
           <Button title="Next Quote!"  onPress={()=>this.getNextQuote()}/>
              </View>
        )
    }
}
export default Btn_next 

