import React, {Component} from 'react';
import {  View,  Button, Text,StyleSheet} from 'react-native';
//import Quote from './component/Quote';
//import  Btn_next from './component/Btn_next';
import * as list from './quotes';


export default class App extends Component{
state={    ListOfquotes: list.quotes, //if you check the way the object is, list.quotes access the array of quotes
           activeQuoteIndex:0,
           
}

getIndex(){
       const {ListOfquotes}= this.state;
       return Math.floor (Math.random()*ListOfquotes.length);   
       };
getNextQuote(){
  this.setState(state =>({
    activeQuoteIndex:this.getIndex()}));
}
  render(){
    const {ListOfquotes,activeQuoteIndex}=this.state;
    const activeQuote=ListOfquotes[this.state.activeQuoteIndex];
    
  return(
         <View  style={styles.container}>
         <React.Fragment>
           
          <Text style={styles.quoteText}></Text>
          <Text style={styles.quoteText}>{ activeQuoteIndex + ".  "+ activeQuote.quote}</Text>
          <Text style={styles.quoteAuthor}>{' ___ '+ activeQuote.author}</Text> 
        </React.Fragment>
        
        <Button  title="Next Quote!"  onPress={()=>this.getNextQuote()}/> 
     {
       //< Quote/>
     } 
         </View>
      )
  }

}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#93867F',
      justifyContent: "center",
      padding: 20,
    },
    quoteText: {
     textAlign: "justify",
      fontSize: 20,

      
    },
    quoteAuthor: {
      fontSize: 25,
      marginTop:25,
      textAlign: "right",
      fontWeight:"bold",
      paddingBottom:50,
    },
  })



