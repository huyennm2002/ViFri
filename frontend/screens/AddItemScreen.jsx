import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';
import { fridgeDatas } from '../data';
import { LOCAL_IP } from '../constants/constants.js';
import DatePicker from 'react-native-datepicker';

const AddItemScreen = ({ navigation }) => {
    const [data, setData] = useState({
        name: '',
        expiration: '',
        serving: '',
    });
    const [token, setToken] = useState('');

    const handleChange = (key, value) => {
        setData(prev => ({ ...prev, [key]: value }));
    };
    console.log(token);
    const [date, setDate] = useState('09-10-2020');

    const handleSubmit = () => {
        axios({
            url: `http://${LOCAL_IP}:3005/items`,
            method: 'POST',
            data,
            headers: { 'Access-Control-Allow-Origin': '*' , token: token},
        }).then(res => {
            setData({
                name: '',
                expiration: '',
                servings: '',
            });
            Alert.alert('Successfully added item!');
            navigation.navigate('Back');
        })
        .catch(err => {
            Alert.alert(err.message);
        });
    };

    useEffect(() => {
        async function getToken() {
            const res = await SecureStore.getItemAsync('token');
            if (res) {
                console.log(res);
                setToken(res);
            }
        }
        getToken();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add New Item</Text>
            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        onChangeText={text => handleChange('name', text)}
                        value={data.name}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Expiry Date"
                        onChangeText={text => handleChange('expiration', text)}
                        value={data.expiryDate}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Serving"
                        onChangeText={text => handleChange('servings', text)}
                        value={data.servings}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    form: {
        width: '80%',
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        padding: 10,
        fontSize: 16,
    },
    button: {
        backgroundColor: 'tomato',
        padding: 10,
        borderRadius: 4,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default AddItemScreen;