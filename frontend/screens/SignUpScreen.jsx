import { Button, View, Text, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
import { isEmpty } from 'lodash';
import { LOCAL_IP } from '../constants/constants.js';
import DismissKeyboardView from '../components/DismissKeyboardView.jsx';

const SignUpScreen = ({ navigation }) => {
    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    });

    const handleChange = (key, value) => {
        setData(prev => ({ ...prev, [key]: value }));
    }

    const checkEmpty = () => {
        return isEmpty(data.first_name) || isEmpty(data.last_name) || isEmpty(data.email) || isEmpty(data.password);
    }

    const handleSubmit = () => {
        if (checkEmpty()) {
            Alert.alert('All fields are required');
            return;
        }
        console.log(data);
        axios({
            url: `http://${LOCAL_IP}:3005/signup`,
            method: "POST",
            data,
            headers: { "Access-Control-Allow-Origin": "*" }
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
        <DismissKeyboardView style={styles.container}>
            <Text style={styles.brandname}>Welcome to ViFri!</Text>
            <Text style={styles.newusertext}>Please sign up to get started</Text>
            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input}
                        placeholder="First Name"
                        onChangeText={(e) => handleChange('first_name', e)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input}
                        placeholder="Last Name"
                        onChangeText={(e) => handleChange('last_name', e)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input}
                        placeholder="Email"
                        onChangeText={(e) => handleChange('email', e)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input}
                        placeholder="Password"
                        onChangeText={(e) => handleChange('password', e)}
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Create new account</Text>
                </TouchableOpacity>
                <Image style={styles.logo}
                    source={{
                        uri: 'https://www.galanz.com/us/wp-content/uploads/2020/10/GLR31TBEER2_45%C2%B0.png',
                    }}
                />
            </View>
        </DismissKeyboardView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        padding: 10,
        fontSize: 16,
    },
    brandname: {
        fontWeight: 'bold',
        fontSize: 45,
        marginTop: 50
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
    },
    inputContainer: {
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'tomato',
        padding: 10,
        borderRadius: 4,
        alignItems: 'center',
        margin: 3,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default SignUpScreen