import * as React from 'react';
import { useEffect, useState } from 'react'
import { TouchableOpacity, KeyboardAvoidingView, TextInput, Text, StyleSheet, View, ProgressViewIOSComponent } from 'react-native';
import { Button } from 'react-native-paper';

export default function UserLogin() {
    const[userDetails, setUserDetails] = useState({email:'', password:''})
 
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="white"
                    returnKeyType='go'
                    autoCorrect={false}
                    onChangeText={email => setUserDetails({...userDetails, email: email})}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="white"
                    returnKeyType='go'
                    secureTextEntry
                    autoCorrect={false}
                    onChangeText={password => setUserDetails({...userDetails, password: password})}
                />
                <View style={styles.buttonContainer}>
                <Button icon="login" mode="contained" onPress={() =>
                    {console.log(`email: ${userDetails.email} and password: ${userDetails.password}`)}}>
                    Login
                </Button> 
                <Button icon="login" mode="contained" onPress={() =>
                    {console.log(`email: ${userDetails.email} and password: ${userDetails.password}`)}}>
                    Login
                </Button> 
        
                </View>  
                <Button mode="text">
                    Forgot Password
                </Button>
                
            </View>
            {/* <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={props.clicked} style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View> */} 
            </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    input: {
        backgroundColor: 'grey',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    inputContainer: {
        width: '80%'
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: 'blue',
        borderWidth: 2,
    },
    buttonOutlineText: {
        color: 'black',
        fontWeight: '700',
        fontSize: 16,
      }
});