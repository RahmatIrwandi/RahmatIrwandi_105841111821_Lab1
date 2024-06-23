import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View } from 'react-native';

export default function App(){
  return (
    <View style={styles.container}>
      <Text style={{
        color: 'grey',
        fontStyle: 'italic',
      }}>Wanistore</Text>
      <Text style={{
        fontSize:35,
        fontStyle:'italic',
        textDecorationLine:'underline',
        textShadowColor:'yellow',
        color: 'green'
      }}>Fashion</Text>
      <Text style={{
        fontSize:65,
        fontStyle:'bold',
        color:'black'
      }}>Syekh Yusuf</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});