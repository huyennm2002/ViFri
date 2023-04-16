import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
import { fridgeDatas } from '../data';
import axios from 'axios';

const AddItemScreen = ({ navigation }) => {
    const [data, setData] = useState({
        name: '',
        expiryDate: '',
        serving: '',
    });

    const handleChange = (key, value) => {
        setData(prev => ({ ...prev, [key]: value }));
    };

    const handleSubmit = () => {
        axios({
            url: 'http://10.104.164.3:3005/items',
            method: 'POST',
            data,
            headers: { 'Access-Control-Allow-Origin': '*' , token},
        })
            .then(res => {
                setData({
                    name: '',
                    expiryDate: '',
                    serving: '',
                });
                Alert.alert('Successfully added item!');
                navigation.replace('FridgeStack');
            })
            .catch(err => {
                Alert.alert(err.message);
            });
    };

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
                        onChangeText={text => handleChange('expiryDate', text)}
                        value={data.expiryDate}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Serving"
                        onChangeText={text => handleChange('serving', text)}
                        value={data.serving}
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