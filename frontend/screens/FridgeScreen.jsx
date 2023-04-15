import React from 'react';
import { View, StyleSheet } from 'react-native';
import FridgeItem from '../components/FridgeItem';
import { fridgeDatas } from '../data';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const FridgeScreen = () => {
    return (
        <View style={styles.container}>
            {fridgeDatas.map(fridgeData => <FridgeItem key={fridgeData.id} fridgeData={fridgeData} />)}
        </View>
    );
};

export default FridgeScreen;
