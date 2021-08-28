import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context'; 

export default class SearchScreen extends Component{
  constructor() {
    super();
    this.state = {
      text: '',
      isSearchPressed: false,
      isLoading: false,
      word  : "Loading...",
      help :'',
      definition : ""
    };
  }

  getWord=(word)=>{
    var searchKeyword1=word.toLowerCase().trim()
    var searchKeyword=searchKeyword1.replace(/ /g,'')
    var url = "https://srishtic-008.github.io/Disorder_Dictionary/"+searchKeyword+".json"
    console.log(url)
    return fetch(url)
    .then((data)=>{
      if(data.status===200)
      {
        return data.json()
      }
      else
      {
        return null
      }
    })
    .then((response)=>{
        //console.log(response)

        var responseObject = response
        //var word = responseObject.word
        //var help = responseObject.results[0].helpEntries[0].help.text
        if(responseObject)
        {
          var wordData = responseObject.definitions[0]
          console.log(wordData)
          //console.log(responseObject.definitions[0])
          var definition=wordData.description
          var help=wordData.Help
          console.log(help)
          this.setState({
            "word" : this.state.text, 
            "definition" :definition,
            "help": help    
            
          })
        }
        else
        {
          this.setState({
            "word" : this.state.text, 
            "definition" :"Not Found",
            
          })

        }
    
    })
  }

  render(){
    return(
<SafeAreaProvider>
      
      <View style={{flex:1, borderWidth:2}}>
        <Header
          backgroundColor={'white'}
          centerComponent={{
            text: 'Disorder Dictionary',
            style: { color: 'black', fontSize: 20 },
          }}
        />
        <ImageBackground source={require('../assets/bg10.jpg')} style={styles.backgroundImage}>
        <View style={styles.inputBoxContainer}>
        
          <TextInput
            style={styles.inputBox}
            onChangeText={text => {
              this.setState({
                text: text,
                isSearchPressed: false,
                word  : "Loading...",
                help :'',
                examples : [],
                definition : ""
              });
            }}
            value={this.state.text}
          />

          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => {
              this.setState({ isSearchPressed: true });
              this.getWord(this.state.text)
            }}>
            <Text style={styles.searchText}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.outputContainer}>
          <Text style={{fontSize:20}}>
            {
              this.state.isSearchPressed && this.state.word === "Loading..."
              ? this.state.word
              : ""
            }
          </Text>
            {
              this.state.word !== "Loading..." ?
              (
                <View style={{justifyContent:'center', marginLeft:10 }}>
                  <View style={styles.detailsContainer}>
                    <Text style={styles.detailsTitle}>
                      Word :{" "}
                    </Text>
                    <Text style={{fontSize:18,fontWeight:'bold' }}>
                      {this.state.word.toUpperCase()}
                    </Text>
                  </View>
                  
                  <View style={{flexDirection:'row',flexWrap: 'wrap'}}>
                    <Text style={styles.detailsTitle}>
                      Definition :{" "}
                    </Text>
                    <Text style={{ fontSize:15}}>
                      {this.state.definition}
                    </Text>
                  </View>
                  <View style={{flexDirection:'row',flexWrap: 'wrap'}}>
                    <Text style={styles.detailsTitle}>
                      How to Help :{" "}
                    </Text>
                    <Text style={{fontSize:15}}>
                      {this.state.help}
                    </Text>
                  </View>
                </View>
              )
              :null
            }
        </View>
        </ImageBackground>
      </View>
  </SafeAreaProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputBoxContainer: {
    flex:0.3,
    alignItems:'center',
    justifyContent:'center'
  },
  inputBox: {
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
  },
  searchButton: {
    width: '40%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
  },
  searchText:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  outputContainer:{
    flex:0.7,
    alignItems:'center'
  },
  detailsContainer:{
    flexDirection:'row',
    alignItems:'center'
  },
  detailsTitle:{
    color:'red',
    fontSize:15,
    fontWeight:'bold'
  },
  backgroundImage:{
    flex:1,
    resizeMode:'cover'
  }

});