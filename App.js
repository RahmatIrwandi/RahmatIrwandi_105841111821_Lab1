import { View } from "react-native";
import React from "react";
import ForgotPassword from './component/pages/forgotPassword';

const App = () => {
  return(
    <View style = {{
      flex: 1,
      backgroundColor: 'white',
    }}>
      <ForgotPassword/>
    </View>
  );
};

export default App;