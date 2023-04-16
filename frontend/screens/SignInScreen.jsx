import { Button, View, Text, StyleSheet, Image } from 'react-native'
import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import  DismissKeyboardView  from '../components/DismissKeyboardView.jsx';

const SignInScreen = ({ navigation }) => {
    return (
        <DismissKeyboardView style={styles.container}>
            <Text style={styles.brandname}>ViFri</Text>
            <TextInput style={styles.textinput}
                placeholder="Username"
            />
            <TextInput style={styles.textinput}
                placeholder="Password"
            />
            <Button
                title="Sign In"
                onPress={() => navigation.navigate("Main")}
                />
            <Button
                title="Create Account?"
                onPress={() => navigation.navigate("SignUp")}
                />
           
           <Image style={styles.logo}
                source={{
                    uri: 'https://www.galanz.com/us/wp-content/uploads/2020/10/GLR31TBEER2_45%C2%B0.png',
                }}
            />
        </DismissKeyboardView>
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
        fontSize: 75,
        margin: 20
    },
    logo: {
        width: 300,
        height: 300,
        margin: 20
    },
  });

export default SignInScreen