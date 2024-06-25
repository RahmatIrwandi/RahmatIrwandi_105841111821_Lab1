import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const TextInputCostum = ({ placeholder, color }) => {
  return ( 
    <TextInput placeholder= {placeholder}
      style={{
       width: 200,
       height: 60,
       borderWidth: 2,
       borderColor: 'gray',
       justifyContent: 'center',
       padding: 10,
       margin: 10,
    }}
   />
  )
}

const App = () => {
  return (
    <View style= {{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <TextInputCostum
    placeholder= "Email" 
    color= "blue" />
     <TextInputCostum
    placeholder= "UserName" 
    color= "blue" />
    
   </View>
  )
}

export default App
