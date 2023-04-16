import { Button, View, Text, StyleSheet, Image, Alert } from 'react-native'
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
import { isEmpty } from 'lodash';
import { LOCAL_IP } from '../constants/constants.js';

const SignUpScreen = ({ navigation }) => {
    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    });

    const handleChange = (key, value) => {
        setData(prev => ({ ...prev, [key]: value}));
    }
    
    const checkEmpty = () => {
        return isEmpty(data.first_name) || isEmpty(data.last_name) || isEmpty(data.email) || isEmpty(data.password);
    }

    const handleSubmit = () => {
        if (checkEmpty()) {
            Alert.alert('All fields are required');
            return;
        }
        axios({
            url: `http://${LOCAL_IP}:3005/signup`,
            method: "POST",
            data,
            headers: { "Access-Control-Allow-Origin": "*"}
        }).then((res) => {
            setData({
                first_name: '',
                last_name: '',
                email: '',
                password: ''
            });
            Alert.alert('Sucessfully signed up!\nPlease log in to continue');
            navigation.navigate("SignIn");
        }).catch((err) => {
            Alert.alert(err.message);
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.brandname}>Welcome to ViFri!</Text>
            <Text style={styles.newusertext}>Enter a username and password to get started</Text>
            <TextInput style={styles.textinput}
                placeholder="First Name"
                onChangeText={(e) => handleChange('first_name', e)}
            />
            <TextInput style={styles.textinput}
                placeholder="Last Name"
                onChangeText={(e) => handleChange('last_name', e)}
            />
            <TextInput style={styles.textinput}
                placeholder="Email"
                onChangeText={(e) => handleChange('email', e)}
            />
            <TextInput style={styles.textinput}
                placeholder="Password"
                onChangeText={(e) => handleChange('password', e)}
                secureTextEntry={true}
            />
            <Button
                title="Create New Account"
                onPress={handleSubmit}
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
      margin: 10,
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
        width: 200,
        height: 200,
        margin: 20
    },
    newusertext: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
  });

  export default SignUpScreen