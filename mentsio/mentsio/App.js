import React,{Component} from 'react';
import {StatusBar} from 'expo-status-bar'
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import HomeScreen from './screens/HomeScreen';
import InfoScreen from './screens/infoScreen';
import SearchScreen from './screens/searchScreen'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer ,createSwitchNavigator } from 'react-navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Stack=createStackNavigator()





export default class App extends React.Component{
  render(){
  return (
    <SafeAreaProvider>
  
    <AppContainer/>
  </SafeAreaProvider>
  );
}
}
const TabNavigator = createBottomTabNavigator({
  Home:{screen:HomeScreen},
  Search: {screen: SearchScreen},
  Info:{screen:InfoScreen}
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Home"){
        return(
          <Image
          source={require("./assets/home.png")}
          style={{width:40, height:40}}
        />
        )

      }
      else if(routeName === "Search"){
        return(
          <Image
          source={require("./assets/search.png")}
          style={{width:35, height:30}}
        />)

      }else if(routeName === "Info"){
        return(
          <Image
          source={require("./assets/info2.png")}
          style={{width:40, height:30}}
        />)

      }
    }
  })
}
);


const AppContainer =  createAppContainer(TabNavigator);



