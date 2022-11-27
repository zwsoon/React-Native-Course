import * as React from 'react';
import { TextInput, StyleSheet, View, ProgressViewIOSComponent } from 'react-native';
import { Button } from 'react-native-paper';

export default function UserLogin(props) {
 
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="User Name"
                placeholderTextColor="#9a73ef"
                returnKeyType='go'
                autoCorrect={false}
                onChangeText={text => props.handleUsername(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#9a73ef"
                returnKeyType='go'
                secureTextEntry
                autoCorrect={false}
                onChangeText={text => props.handlePassword(text)}
            />
            <Button icon="login" mode="contained" onPress={props.clicked}>
                Login
            </Button> 
            <Button mode="text">
                Forgot Password
            </Button> 
        </View> 
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
});