import { text } from 'express'
import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'

const ButtonCustom = ({ text, color, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}
        style = {[styles.button, {background: color}]}>
        </TouchableOpacity>
    )
}
const TextInputCustom = ({placeholder, color, typeKeyboard, secureTextEntry}) => {
    return (
        <TextInput
        keyboardType={typeKeyboard}
        placeholder={placeholder}
        secureTextEntry = {secureTextEntry}
        />
    )
}
export default function Login() {
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Login</Text>
            <TextInputCustom
            placeholder = "Email"
            color = "black"
            typeKeyboard="email-address"
            />
            <TextInputCustom
            placeholder = "Password"
            color = "black"
            typeKeyboard="default"
            secureTextEntry={true}
            />
            <Text style = {style.forgetPasswordText}>Forgot your Password?</Text>
            <ButtonCustom
            text = "LOGIN"
            color="red"
            onPress={() => {}}
            />
            <Text style = {style.orText}> Or login with social account</Text>
            <View style = {style.socialContainer }>
                <TouchableOpacity onPress={() =>{}}>
                <Image source = {require('./assets/facebook.png')}
                style = {style.socialIcon}
                />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },
    TextInput: {
        width: 300,
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 15,
        paddingLeft: 10
    },
    forgetPasswordText: {
        alignSelf: 'flex-start',
        marginRight: 30,
        marginBottom:20,
        color: 'gray'
    },
    button: {
        width: 300,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    orText: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 20
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 150
    },
    socialIcon: {
        width: 50,
        height: 50,
        marginHorizontal: 10
    },
})