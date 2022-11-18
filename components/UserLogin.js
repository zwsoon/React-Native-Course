import * as React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';


export default function UserLogin() {
    
    const styles = StyleSheet.create({
        input: {
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        },
    });
    
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="User Name or Email Address"
                placeholderTextColor="#9a73ef"
                returnKeyType='go'
                autoCorrect={false}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#9a73ef"
                returnKeyType='go'
                secureTextEntry
                autoCorrect={false}
            />
            <Button icon="login" mode="contained">
                Login
            </Button> 
            <Button mode="text">
                Forgot Password
            </Button> 
        </View> 
    )
}