import React, {useState} from 'react';
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
    button: {
        backgroundColor: 'tomato',
        padding: 10,
        borderRadius: 4,
        alignItems: 'center',
    }
});


const FridgeScreen = ({ navigation }) => {
    const [fridgeItems, setFridgeItems] = useState(fridgeDatas)
    const handleDelete = (id) => {
        const newFridgeItems = fridgeItems.filter((item) => item.id != id);
        console.log(newFridgeItems.length)
        setFridgeItems(newFridgeItems);
        console.log(fridgeItems.length)
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Add new item"
                        onPress={() => navigation.navigate("AddScreen")}
                    />
                </View>
                {fridgeItems.map(fridgeData => <FridgeItem key={fridgeData.id} fridgeData={fridgeData} handleDelete={handleDelete} />)}
            </View>
        </ScrollView>
    );
};

export default FridgeScreen;