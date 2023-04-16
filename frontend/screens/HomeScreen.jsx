import { Button, View, Text } from 'react-native';
import React from 'react';
import * as SecureStore from 'expo-secure-store';

const HomeScreen = ({ navigation }) => {
  const item = async () => {
    const res = await SecureStore.getItemAsync('token');
    if (res) console.log(res);
  }
  item();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  )
}

export default HomeScreen