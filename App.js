import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import ButtonCamera from './components/ButtonCamera';
import UserLogin from './components/UserLogin';
import { Provider as PaperProvider } from 'react-native-paper';
import ButtonAPI from './components/ButtonAPI';

export default function App() {

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  
  handleUsername = (text) => {
    setUsername(text);
  }

  handlePassword = (text) => {
    setPassword(text)
  }

  showlog = () => {
    console.log(`username: ${username} password: ${password}`)
  }

  return (
    <PaperProvider>
      <View style={styles.container}>
      <Text>Click to Open Camera</Text>
      {/* <Button icon="camera" mode="contained">
                Camera Button
      </Button> */}

      <ButtonCamera />
        <UserLogin
          handleUsername={this.handleUsername}
          handlePassword={this.handlePassword}
          clicked={this.showlog}
      />
      {/* <ButtonAPI /> */}
      </View>
      
    </PaperProvider>
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
