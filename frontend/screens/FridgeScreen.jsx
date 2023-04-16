import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FridgeItem from '../components/FridgeItem';
import { fridgeDatas } from '../data';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:10
    },
});

const FridgeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            {fridgeDatas.map(fridgeData => <FridgeItem key={fridgeData.id} fridgeData={fridgeData} />)}
        </SafeAreaView>
    );
};

export default FridgeScreen;
