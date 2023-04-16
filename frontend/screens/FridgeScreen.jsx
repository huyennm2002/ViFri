import React from 'react';
import { View, StyleSheet, ScrollView, Button } from 'react-native';
import FridgeItem from '../components/FridgeItem';
import { fridgeDatas } from '../data';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    buttonContainer: {
        marginTop: 20,
    },
});

const FridgeScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Add new item"
                        onPress={() => navigation.navigate("AddScreen")}
                    />
                </View>
                {fridgeDatas.map(fridgeData => <FridgeItem key={fridgeData.id} fridgeData={fridgeData} />)}
            </View>
        </ScrollView>
    );
};

export default FridgeScreen;
