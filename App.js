
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import ButtonComponent from './component/button/button';

const App = () => {
  return (
    <View style= {{
      flex: 1,
      backgroundColor: '#000',
    }}>
      <Image
        source={require('./assets/WandStore.png')}
        style={{
         width: '120%',
         height: '100%',
         position: 'absolute',
         top: 25,
         opacity: 0.5,
         zIndex: -1,
        }}
        resizeMode='cover'
      />
      <ScrollView contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}>
        <Image
          source={require('./assets/WandStore.png')}
          style={{
            width: 240,
            height: 100,
            marginTop: 5,
            opacity: 1,
            zIndex: 1,
          }}
          resizeMode= 'cover'
        />
        <Text style={{
          fontSize: 30,
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          color: 'white',
          position: 'absolute',
          top: 0,
          marginTop: 150,
        }}>Welcome to WandStore</Text>

        <Text style={{
          color: 'white',
          fontSize: 20,
          textAlign: 'center',
          marginTop: 10,
        }}>WandStore adalah toko fashion kekininian</Text>

        <Text style={{
          color: 'white',
          fontSize: 18,
          textAlign: 'center',
          marginTop: 10,
        }}>pilih fashion sesuai kebutuhan kamu </Text>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
          marginBottom: 50,
        }}>
          
          <ButtonComponent title= "Sign In" color= "green" />
          <ButtonComponent title= "Sign Up" color= "grey" />
         </View>
        </ScrollView>
      </View>
    );
  }
 

export default App;

