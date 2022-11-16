import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import ButtonCamera from './components/ButtonCamera';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Click to Open Camera</Text>
      {/* <Button icon="camera" mode="contained">
                Camera Button
      </Button> */}

      <ButtonCamera/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
