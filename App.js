
import {StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style= {{
      flex: 1,
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Image
        source={require('./assets/WandStore.png')}
        style={{
         width: '120%',
         height: '100%',
         position: 'absolute',
         top: 25,
         opacity: 0.4,
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
          <View style={{ marginHorizontal: 10}}>
            <Text style={{
              width: 100,
              height: 50,
              color: 'white',
              backgroundColor: 'green',
              textAlign: 'center',
              lineHeight: 50,
              fontSize: 20,
              borderRadius: 10,
              marginTop: 150,
            }}>LOGIN</Text>
            </View>
            <View style={{ marginHorizontal: 20}}>
              <Text style={{
                width: 100,
                height: 50,
                color: 'white',
                backgroundColor: 'grey',
                textAlign: 'center',
                lineHeight: 50, 
                fontSize: 20,
                borderRadius: 10,
                marginTop: 150,
              }}>REGISTER</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
 

export default App

