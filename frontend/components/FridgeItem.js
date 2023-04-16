import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native';
import { ListItem, Icon } from '@rneui/themed';
import { FlatList } from 'react-native-gesture-handler';


const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#fff',
    },

})

const FridgeItem = ({ fridgeData, handleDelete }) => {
    return (
        <View key={fridgeData.id} style={styles.container}>
            <ListItem>
                <Image source={fridgeData.imageUrl} style={{ height: 100, width: 100 }} />
                <ListItem.Content>
                    <ListItem.Subtitle>
                        <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>{fridgeData.name}</Text>
                    </ListItem.Subtitle>
                    <ListItem.Subtitle>{`Exp: ${fridgeData.expiryDate}`}</ListItem.Subtitle>
                    <ListItem.Subtitle>{`Serving: ${fridgeData.serving}`}</ListItem.Subtitle>
                </ListItem.Content>
                <Icon name="edit" type="material" onPress={() => console.log('Edit pressed')} />
                <Icon name="trash-can-outline" type="material-community" color="grey" onPress={() => handleDelete(fridgeData.id)} />
            </ListItem>
        </View>
    );
};

export default FridgeItem;