import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import ButtonComponent from "../button/button";
import Inputan from "../TextInput/Inputan";

const ForgotPassword = () => {
    return (
        <View style = {{
            flex: 1,
            backgroundColor: 'white',
            paddingHorizontal: 30,
            paddingTop: 100
        }}>
            <TouchableOpacity style = {{
                position: 'absolute',
                top: 60,
                left: 20
            }}>
                <Image source = {require('../../assets/bck.png')}
                style = {{ width: 30, height: 30}} 
                />

            </TouchableOpacity>
            <View style = {{
                marginBottom: 100,
                marginTop: 10
            }}>
                <Text style = {{
                    fontWeight: 'bold',
                    fontSize: 40
                }}>
                    Forget Password
                </Text>
                </View>
                <View style = {{
                    marginBottom: 42
                }}>
                    <Text style = {{
                        fontSize: 16,
                        marginBottom: 10
                    }}>
                        Please, enter your email address, you will receive a link to create a new password via email
                    
                    </Text>
                    <Inputan nama = "Email" color = "black" />
                    <Text style = {{
                        fontSize: 12,
                        paddingHorizontal: 20,
                        color: 'green',
                        marginTop: 5

                    }}>
                        Not a valid email address, should be your@email.com
                    </Text>
                    </View>
                    <ButtonComponent title= "Send" color = "green" />
                    </View>

                    
    )
}

export default ForgotPassword;