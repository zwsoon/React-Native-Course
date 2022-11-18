import * as React from 'react';
import { Button } from 'react-native-paper';
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import { Alert, View } from 'react-native';

export default function buttonCamera(){
    const [condition, setCondition] = React.useState('Camera')
    const [cameraPermissionInfo, requestPermission] = useCameraPermissions();

    async function verifyPermissions() {
        if (cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();

            return permissionResponse.granted;
        }
        if (cameraPermissionInfo.status === PermissionStatus.DENIED) {
            Alert.alert('Insufficient Permissions!', 'You need to grant camera permissions to use this app.');
            return false;
        }
        return true;
    }

    async function takeImage() {
        const hasPermission = await verifyPermissions();
        if (!hasPermission) {
            return;
        }
        const image = await launchCameraAsync({
            allowEditing: true,
            aspect: [16, 9],
            quality: 0.5,
        });
    }

    return (
        <Button icon="camera" mode="contained" onPress={takeImage}>
            {condition}
        </Button> 
    )
}