
import { Text, View, Image, TextInput } from 'react-native';
import React from 'react';

const App = () => {
  const Inputan = ({ nama, color }) => {
  return (
   <TextInput
    placeholder= {`masukkan ${nama}`}
    style= {{
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 15,
      width: 340,
      height: 60,
      marginVertical: 15,
      padding: 15,
      backgroundColor: 'white',
      color: color,
     }}
    />
  );
};

  return (
    <View style= {{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>    
        <Inputan nama= "Email" color = "black" />
        <Inputan nama= "Username" color = "black" />
        <Inputan nama= "Password" color = "black" />
      </View>
    );
  };

export default App;

