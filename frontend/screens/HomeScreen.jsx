import { ScrollView, View, Text, StyleSheet } from 'react-native'
import React from 'react'
import * as SecureStore from 'expo-secure-store';
import Header from '../components/Header';

const HomeScreen = ({ navigation }) => {
  const item = async () => {
    const res = await SecureStore.getItemAsync('token');
    if (res) console.log(res);
  }
  item();
  return (
    <View style={{ flex: 1 }}>
      <Header></Header>
      <ScrollView style={styles.container}>
        <Text style={styles.hometitle}>Welcome Back!</Text>
        <Text style={styles.itemcounttitle}>Number of Items in Fridge: ???</Text>
        <Text style={styles.itemcounttitle}>Number of items about to expire: ???</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
    backgroundColor: 'lightsteelblue',
  },
  hometitle: {
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: 50,
    textAlign: 'center',
  },
  itemcounttitle: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#fff',
    marginRight: 25,
    marginLeft: 25,
    marginTop: 15,
  },
  expirecounttitle: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#fff',
    marginRight: 25,
    marginLeft: 25,
    marginTop: 15
  },
})

export default HomeScreen