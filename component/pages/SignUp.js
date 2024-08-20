import { Text, View, Image } from "react-native";
import React from "react";
import ButtonComponent from '../button/button';
import Inputan from '../TextInput/Inputan';

const SignUp = (navigation) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
        }}>
            <View style={{
                position: 'absolute',
                top: 50,
                left: 20
            }}>
                <Image source={require('../../assets/bck.png')}
                    style={{ width: 30, height: 30 }} />
            </View>
            <View style={{
                flex: 1,
                justifyContent: 'flex-start',
                marginLeft: 30,
                alignItems: 'flex-start',
                marginTop: 80
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 50
                }}>
                    SignUp
                </Text>
            </View>
            <View style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 100
            }}>
                <Inputan name="Email" color="black" />
                <Inputan name="UserName" color="black" />
                <Inputan name="Password" color="black" />

                <Text style={{
                    fontSize: 14,
                    marginTop: 5,
                    marginBottom: 30,
                    textAlign: 'right',
                    marginLeft: 175
                }} onPress={() => navigation.navigate('Login')}>
                    Already have an Account?
                </Text>
                <ButtonComponent title="SignUp" color="green" />

            </View>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{
                    fontSize: 14,
                    color: 'black',
                    marginTop: 5,
                    textAlign: 'center',
                    marginBottom: 10
                }}>
                    Or SignUp with social account
                </Text>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly'
                }}>
                    <View style={{
                        flex: 1,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 5,
                        width: 90,
                        height: 80,
                        marginHorizontal: 10

                    }}>
                        <Image source={require('../../assets/google.png')}
                            style={{ width: 50, height: 50 }}
                        />

                    </View>
                    <View style={{
                        flex: 1,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 5,
                        width: 90,
                        height: 80,
                        marginHorizontal: 10

                    }}>
                        <Image source={require('../../assets/facebook.png')}
                            style={{ width: 50, height: 50 }}
                        />
                    </View>
                </View>
            </View>
        </View>

    )
}

export default SignUp;