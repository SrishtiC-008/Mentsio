import React,{Component} from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar, TouchableOpacity, ImageBackground, Image} from 'react-native';
import Constants from 'expo-constants';



export default class HomeScreen extends React.Component{
  render(){
  return (
    <View style={styles.container}>
    <SafeAreaView styles={styles.droidSafeArea}/>
    <ImageBackground source={require('../assets/bg10.jpg')} style={styles.backgroundImage}>
    <View>
    <Image source={require("../assets/pic3.png")} style={styles.img2}/>
  
    </View>
    <Text style={styles.displaytext}>Srishti Chowdhary</Text>
    </ImageBackground>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },

   img2:{
     flex:1,
    width:265,
    height:250,
    marginTop:110,
    alignSelf:'center',
    borderColor:"black"
  },

  

  droidSafeArea:{
    marginTop:Platform.OS === "android"?StatusBar.currentHeight:0
  },
  
  displaytext:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    fontSize:25,
    fontWeight:'bold'
  },


  backgroundImage:{
    flex:1,
    width:400
  }

});




