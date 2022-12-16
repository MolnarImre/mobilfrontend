import React from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View, Image , TouchableOpacity, TextInput } from 'react-native';
const IP=require('./Ipcim')

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true,
    alkatreszgyarto:"",
    alkatresznev:"",
    alkatreszcikkszam:"",
    alkatreszar:"",
    dataSource:[],
    }

  }


feltoltes=()=>{
//alert("hello")
var bemenet={
    alkatreszgyarto:this.state.alkatreszgyarto,
    alkatresznev:this.state.alkatresznev,
    alkatreszcikkszam:this.state.alkatreszcikkszam,
    alkatreszar:this.state.alkatreszar
    
  }

fetch(IP.ipcim+"/feltoltes", {
    method: "POST",
    body: JSON.stringify(bemenet),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  }

)
.then(x => x.text())
.then(y => {
  alert(y)
  
}
);
}

  


componentDidMount(){
    return fetch(IP.ipcim+'/tipus')
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
          {/*-------------------------------------------------------------------------------------- Feltöltés */}
          <Text style={{color:"Light", fontSize:15,marginLeft:20,marginTop:30}}>Alkatrész gyártója:</Text>
          <TextInput
        style={{color:"Light", fontSize:15,marginLeft:20,marginTop:10}}
        placeholder="Ide írj"

        onChangeText={(beirtszoveg)=>this.setState({alkatreszgyarto:beirtszoveg})}
        value={this.state.alkatreszgyarto}
      />
      <Text style={{color:"Light", fontSize:15,marginLeft:20,marginTop:30}}>Alkatrész megnevezése:</Text>
          <TextInput
        style={{color:"Light", fontSize:15,marginLeft:20,marginTop:10}}
        placeholder="Ide írj"

        onChangeText={(beirtszoveg)=>this.setState({alkatresznev:beirtszoveg})}
        value={this.state.alkatresznev}
      />
      <Text style={{color:"Light", fontSize:15,marginLeft:20,marginTop:30}}>Alkatrész cikkszáma:</Text>
          <TextInput
        style={{color:"Light", fontSize:15,marginLeft:20,marginTop:10}}
        placeholder="Ide írj"

        onChangeText={(beirtszoveg)=>this.setState({alkatreszcikkszam:beirtszoveg})}
        value={this.state.alkatreszcikkszam}
      />
      <Text style={{color:"Light", fontSize:15,marginLeft:20,marginTop:30}}>Alkatrész ára:</Text>
          <TextInput
        style={{color:"Light", fontSize:15,marginLeft:20,marginTop:10}}
        placeholder="Ide írj"

        onChangeText={(beirtszoveg)=>this.setState({alkatreszar:beirtszoveg})}
        value={this.state.alkatreszar}
      />
      <TouchableOpacity
        style={styles.kereses}
        onPress={ ()=>this.feltoltes()}
      >
        <Text style={{color:"white",fontWeight:"bold",fontSize:15}}>Feltöltés</Text>
      </TouchableOpacity>
              {/*------------------------------------------------------------------------------------------------- Feltöltés vége */}
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  kekgomb: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    width:200,
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