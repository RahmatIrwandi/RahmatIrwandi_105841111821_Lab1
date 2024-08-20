import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import ButtonComponent from '../button/button'
import Inputan from '../TextInput/Inputan'

const login = (navigation) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            paddingHorizontal: 30,
            paddingTop: 100
        }}>
            <TouchableOpacity style={{
                position: 'absolute',
                top: 60,
                left: 20
            }}>
                <Image source={require('../../assets/bck.png')}
                    style={{ width: 30, height: 30 }}
                />
            </TouchableOpacity>
            <View style={{
                marginBottom: 60,
                marginTop: 40
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 50
                }}>
                    Login
                </Text>
            </View>

            <View style={{
                marginBottom: 10,
            }}>
                <Inputan nama='email' color='black' />
                <Inputan nama='password' color='black' />
                <TouchableOpacity>
                    <Text style={{
                        fontSize: 16,
                        color: 'black',
                        marginTop: 5,
                        marginBottom: 50,
                        textAlign: 'right'
                    }} onPress={() => navigation.navigate('ForgetPassword')}>
                        Forgot Your Passwords?
                    </Text>
                </TouchableOpacity>
            </View>
            <ButtonComponent title='LOGIN' color="green" />
            <Text style={{
                fontSize: 16,
                color: 'black',
                textAlign: 'center',
                marginTop: 50,
                marginBottom: 20
            }}>
                or login with sosial account
            </Text>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
                <TouchableOpacity style={{
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    width: 92,
                    height: 64,
                    marginHorizontal: 10
                }}>
                    <Image source={require('../../assets/facebook.png')}
                        style={{ width: 50, height: 50 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    width: 92,
                    height: 64,
                    marginHorizontal: 10
                }}>
                    <Image source={require('../../assets/google.png')}
                        style={{ width: 50, height: 50 }}

                    />
                </TouchableOpacity>
            </View>
        </View>

    );
};

export default login;