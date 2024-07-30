import { View } from "react-native";
import React from "react";
import SignUp from './component/pages/SignUp';

const App = () => {
  return(
    <View style = {{
      flex: 1,
      backgroundColor: 'white',
    }}>
      <SignUp/>
    </View>
  );
};

export default App;