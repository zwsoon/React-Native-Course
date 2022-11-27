import * as React from 'react';
import { Button } from 'react-native-paper';
import axios from 'axios';
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import { Alert, View } from 'react-native';

export default function ButtonAPI(props){
    storeName = (props) => {
        //axios.post('https://udemy-69c41-default-rtdb.firebaseio.com/FirstName.json', condition).catch("sorry");
        setUsername(props.username);
        setPassword(props.password);
    }
    
    return (
        <Button icon="camera" mode="contained" onPress={storeName}>
            API Button
        </Button> 
    )
}