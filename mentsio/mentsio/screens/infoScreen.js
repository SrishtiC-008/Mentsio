import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context'; 

export default class InfoScreen extends Component {
  render(){
    return(
      <View style={{flex:1, borderWidth:2}}>
      
        <Header
          backgroundColor={'white'}
          centerComponent={{
            text: 'Information',
            style: { color: 'black', fontSize: 20 }
          }}
        />
        <ImageBackground source={require('../assets/bg10.jpg')} style={styles.backgroundImage}>
       <Image source={require("../assets/disorder.png")} style={styles.disorder}></Image>

      <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
            <Text style={{fontSize:15}}>An illness that disrupts normal physical or mental functions. A disorder could be defined as a set of problems, which result in causing significant difficulty, distress, impairment and/or suffering in a persons daily life. This app will help you understand some of the disorders better. If you go to the search screen you can search for a disorder to help you understand.</Text>

         </View>
         </ImageBackground>
                </View>
    )
  }
}

const styles = StyleSheet.create({
  disorder:{
    width:250,
    height:250,
    alignSelf:'center'
  },
  backgroundImage:{
    flex:1,
    resizeMode:'cover'
  },

})
