import { View, Text, SafeAreaView, StyleSheet, Button, TextInput } from 'react-native';
import React from 'react'
import { Card } from '@rneui/base';


const ItemScreen = ({ route, navigation }) => {
    const { fridgeData } = route.params;
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
                            placeholder={fridgeData.expiryDate}
                        />
                    </View>
                    <Card.FeaturedSubtitle style={styles.subTitle} h4> Serving: </Card.FeaturedSubtitle>
                    <View>
                        <TextInput style={styles.textinput}
                            placeholder={fridgeData.serving}
                        />
                    </View>
                </Card>
                <Button
                    title="Submit"
                />
            </SafeAreaView>
        </View>
    )
}

export default ItemScreen