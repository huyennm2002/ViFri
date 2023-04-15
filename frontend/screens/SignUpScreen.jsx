import { Button, View, Text, StyleSheet, Image } from 'react-native'
import React from 'react';
import { TextInput } from 'react-native-gesture-handler';

const SignUpScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.brandname}>Welcome to ViFri!</Text>
            <Text style={styles.newusertext}>Enter a username and password to get started</Text>
            <TextInput style={styles.textinput}
                placeholder="Username"
            />
            <TextInput style={styles.textinput}
                placeholder="Password"
            />
            <Button
                title="Create New Account"
                onPress={() => navigation.navigate("Main")}
                />
           <Image style={styles.logo}
                source={{
                    uri: 'https://www.galanz.com/us/wp-content/uploads/2020/10/GLR31TBEER2_45%C2%B0.png',
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 1,
      backgroundColor: '#fff',
      justifyContent: "center",
      alignItems: "center"
    },
    textinput: {
      padding: 10,
      backgroundColor: '#fff',
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 2,
      backgroundColor: '#f2f2f2',
      borderRadius: 23,
      margin: 15,
      width: 290,
      fontSize: 20,
      height: 60
    },
    brandname: {
        fontWeight: 'bold',
        fontSize: 40,
        margin: 10
    },
    logo: {
        width: 300,
        height: 300,
        margin: 20
    },
    newusertext: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
  });

  export default SignUpScreen