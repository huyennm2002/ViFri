import { View, Text, SafeAreaView, StyleSheet, Button, TextInput } from 'react-native';
import React, {useState} from 'react'
import { Card } from '@rneui/base';


const ItemScreen = ({ route, navigation }) => {
    const { fridgeData, handleUpdate } = route.params;
    const styles = StyleSheet.create({
        item: {
            fontSize: 20,
            marginLeft: 24
        },
        subTitle: {
            marginTop: 10,
            color: 'black'
        },
        instructions: {
            fontSize: 16
        }
    });
    const [item, setItem] = useState(fridgeData)
    const handleChangeExpirationDate = (expiryDate) => {
        setItem({...item, expiryDate})
    }

    const handleChangeServing = (serving) => {
        setItem({...item, serving})
    }

    const handleSubmit = (item) => {
        handleUpdate(item)
        navigation.navigate("Back")
    }

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView>
                <Card>
                    <Card.Title h2>
                        {fridgeData.name}
                    </Card.Title>
                    <Card.Divider />
                    <Card.Image source={fridgeData.imageUrl} />
                    <Card.FeaturedSubtitle style={styles.subTitle} h4>Expiration day: </Card.FeaturedSubtitle>
                    <View>
                        <TextInput style={styles.textinput}
                            defaultValue={fridgeData.expiryDate}
                            onChangeText={handleChangeExpirationDate}
                        />
                    </View>
                    <Card.FeaturedSubtitle style={styles.subTitle} h4> Serving: </Card.FeaturedSubtitle>
                    <View>
                        <TextInput style={styles.textinput}
                            defaultValue={fridgeData.serving}
                            onChangeText={handleChangeServing}
                            keyboardType="numeric"
                        />
                    </View>
                </Card>
                <Button
                    title="Submit"
                    onPress={() => handleSubmit(item)}
                />
            </SafeAreaView>
        </View>
    )
}

export default ItemScreen