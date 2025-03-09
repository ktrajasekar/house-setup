// import { Button, Text } from '@react-navigation/elements';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import TextInputComponent from '../../components/TextInputComponent';
import React from 'react';
const hello = () => {
  console.log('Hello');
}
export function Home() {
  const [text, onChangeText] = React.useState('Useless Text');
  return (
    <View style={styles.container}>
      {/* <Text>Home Screen</Text>
      <Text>Open up 'src/App.tsx' to start working on your app!</Text>
      <Button onPress={() => hello()}>Press me</Button>
      <Button screen="Profile" params={{ user: 'jane' }}>
        Go to Profile
      </Button>
      <Button screen="Settings">Go to Settings</Button> */}
      <TextInputComponent onChangeText={(text) => console.log(text)} placeholder='Enter sq ft' />
      <View style={{ height: 20 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  Input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
});
