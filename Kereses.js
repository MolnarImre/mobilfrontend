import React from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View, Image , TouchableOpacity, TextInput } from 'react-native';
const IP=require('./Ipcim')

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true,
    szo:""
    }

  }

  


  componentDidMount(){
    return fetch(IP.ipcim+'tipus')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

keres=()=>{
//alert("hello")
var bemenet={
    bevitel1:this.state.szo
  }

fetch(IP.ipcim+"keres", {
    method: "POST",
    body: JSON.stringify(bemenet),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  }

)
.then(x => x.text())
.then(y => alert(y));
}

  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
          {/*-------------------------------------------------------------------------------------- keresés */}
          <Text style={{color:"Light", fontSize:15,marginLeft:15,marginTop:20}}>Add meg a keresendő alkatrész nevét:</Text>
          <TextInput
        style={{height: 40,marginLeft:15}}
        placeholder="szó megadása"

        onChangeText={(beirtszoveg)=>this.setState({szo:beirtszoveg})}
        value={this.state.szo}
      />
      <TouchableOpacity
        style={styles.kereses}
        onPress={ ()=>this.keres()}
      >
        <Text style={{color:"white",fontWeight:"bold",fontSize:15}}  >Keresés</Text>
      </TouchableOpacity>
              {/*------------------------------------------------------------------------------------------------- találatok*/}
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 

          <View >
          <Text style={{color:"brown",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >{this.state.tipus} </Text>
          <Image  source={{uri: IP.ipcim+item.auto_tipus_kep}} style={{width:300,height:300,marginLeft:"auto",marginRight:"auto"}} />  

          <TouchableOpacity
        style={styles.kekgomb}
        onPress={async ()=>this.szavazat(item.film_id)}
      >
        <Text style={{color:"white",fontWeight:"bold",fontSize:15}}  >Ehez akorok alkatrészt</Text>
      </TouchableOpacity>
          </View>
        
        }

        
          keyExtractor={({autotipus_id}, index) => autotipus_id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  kekgomb: {
    alignItems: "center",
    backgroundColor: "lightblue",
    padding: 10,
    width:400,
    marginLeft:"auto",
    marginRight:"auto",
  },
  kereses:{
    alignItems: "center",
    backgroundColor: "darkblue",
    padding: 10,
    width:100,
    marginLeft:"auto",
    marginRight:"auto",
  }
 
})
