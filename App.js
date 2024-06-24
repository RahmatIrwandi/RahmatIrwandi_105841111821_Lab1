
import {StyleSheet, Text, View } from 'react-native';
import react from 'react';
const App = () => {
  return (
    <View style= {{flex: 1}}>
      <View style={{flex: 1,flexDirection: 'colum'}}>
    <View style= {{flex: 1,backgroundColor: 'green'}}></View>
    <View style= {{flex: 1,backgroundColor: 'grey'}}></View>
     </View>
     <View style= {{flex: 1,flexDirection: 'row'}}>
    <View style= {{flex: 1,backgroundColor: 'orange'}}></View>
    <View style= {{flex: 1,backgroundColor: 'white'}}></View>
     </View>

     </View>
  );
  
}

export default App

