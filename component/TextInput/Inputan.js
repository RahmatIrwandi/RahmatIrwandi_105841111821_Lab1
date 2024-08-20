import { TextInput } from "react-native";
import React from "react";

const Inputan = ({ nama, color }) => {
    return (
        <TextInput
            placeholder={` ${nama}`}
            placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
            style={{
                borderWidth: 2,
                borderColor: 'transparent',
                borderRadius: 5,
                width: 320,
                paddingTop: 10,
                height: 64,
                marginVertical: 10,
                paddingHorizontal: 5,
                backgroundColor: 'white',

                color: color,
                fontSize: 16,
                textAlignVertical: 'top',
                textAlign: 'left',
            }}
            secureTextEntry={nama === 'password'}

        />

    )
}
export default Inputan;