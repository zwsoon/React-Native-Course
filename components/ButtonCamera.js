import * as React from 'react';
import { Button } from 'react-native-paper';

export default function buttonCamera(){
    const [condition, setCondition] = React.useState('Camera')

    onPress = () => {
        setCondition('Camera clicked!')
    }

    return (
        <Button icon="camera" mode="contained" onPress={onPress}>
            {condition}
        </Button>
    )
}