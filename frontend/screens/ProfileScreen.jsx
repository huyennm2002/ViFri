import { Button, View, Text, StyleSheet } from 'react-native'
import React from 'react'
import FridgeItem from '../components/FridgeItem'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30,
      padding: 20,
      backgroundColor: '#fff',
    }
  });
   
const ProfileScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
      </View>
     )
   }

export default ProfileScreen