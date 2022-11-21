import * as React from 'react';
import { Button } from 'react-native-paper';
import axios from 'axios';
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import { Alert, View } from 'react-native';

export default function ButtonAPI(){
    const [condition, setCondition] = React.useState({
        firtName: { value: "Zachary" },
        lastName: { value: "Soon"},
        DOB: {value: 'March'},
    });
    
    storeName = () => {
        axios.post('https://udemy-69c41-default-rtdb.firebaseio.com/FirstName.json',condition).catch("sorry");
    }
    

    return (
        <Button icon="camera" mode="contained" onPress={storeName}>
            API Button
        </Button> 
    )
}