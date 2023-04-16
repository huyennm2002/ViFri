import { Button, View, Text, StyleSheet, Image, Alert } from 'react-native'
import React, { useState } from 'react';
import axios from 'axios';
import { isEmpty } from 'lodash';
import * as SecureStore from 'expo-secure-store';
import { TextInput } from 'react-native-gesture-handler';
import { LOCAL_IP } from '../constants/constants.js';

const SignInScreen = ({ navigation }) => {
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (key, value) => {
        setData(prev => ({ ...prev, [key]: value}));
    }
    
    const checkEmpty = () => {
        return isEmpty(data.email) || isEmpty(data.password);
    }

    const saveToken = async (token) => {
        await SecureStore.setItemAsync('token', token);
    }

    const handleSubmit = async () => {
        if (checkEmpty()) {
            Alert.alert('All fields are required');
            return;
        }
        axios({
            url: `http://${LOCAL_IP}:3005/login`,
            method: "POST",
            data,
            headers: { "Access-Control-Allow-Origin": "*"}
        }).then((res) => {
            console.log(res.data);
            saveToken(res.data);
            navigation.navigate("Main");
        }).catch((err) => {
            Alert.alert(err.message);
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.brandname}>ViFri</Text>
            <TextInput style={styles.textinput}
                placeholder="Email"
                onChangeText={(e) => handleChange('email', e)}
            />
            <TextInput style={styles.textinput}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(e) => handleChange('password', e)}
            />
            <Button
                title="Sign In"
                onPress={handleSubmit}
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
