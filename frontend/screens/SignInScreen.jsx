import { Button, View, Text, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import axios from 'axios';
import { isEmpty } from 'lodash';
import * as SecureStore from 'expo-secure-store';
import { TextInput } from 'react-native-gesture-handler';
import { LOCAL_IP } from '../constants/constants.js';
import DismissKeyboardView from '../components/DismissKeyboardView.jsx';

const SignInScreen = ({ navigation }) => {
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (key, value) => {
        setData(prev => ({ ...prev, [key]: value }));
    }

    const checkEmpty = () => {
        return isEmpty(data.email) || isEmpty(data.password);
    }

    const saveToken = async (token) => {
        await SecureStore.setItemAsync('token', token);
    }

    const handleSubmit = async () => {
        // if (checkEmpty()) {
        //     Alert.alert('All fields are required');
        //     return;
        // }
        // axios({
        //     url: `http://${LOCAL_IP}:3005/login`,
        //     method: "POST",
        //     data,
        //     headers: { "Access-Control-Allow-Origin": "*"}
        // }).then((res) => {
        //     console.log(res.data);
        //     saveToken(res.data);
        //     navigation.navigate("Main");
        // }).catch((err) => {
        //     Alert.alert(err.message);
        // })
        navigation.navigate("Main")
    }

    return (
        <DismissKeyboardView style={styles.container}>
            <Text style={styles.brandname}>ViFri</Text>
            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input}
                        placeholder="Email"
                        onChangeText={(e) => handleChange('email', e)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={(e) => handleChange('password', e)}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SignUp")}>
                    <Text style={styles.buttonText}>Create Account?</Text>
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
    inputContainer: {
        marginBottom: 20,
    },
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
        fontSize: 75,
        margin: 20,
        marginTop: 50,
        color: 'tomato',
    },
    logo: {
        width: 300,
        height: 300,
        margin: 20
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

export default SignInScreen