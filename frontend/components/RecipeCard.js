import { View, StyleSheet, Text, Pressable, ScrollView } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Card } from '@rneui/themed';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart as faHeartReg } from '@fortawesome/free-regular-svg-icons/faHeart';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons/faShareNodes';
const styles = StyleSheet.create({
    view: {
        backgroundColor: '#fff',
        marginTop: 6,
    },
    text: {
        paddingTop: 15,
        fontSize: 16
    },
    footer: {
        marginTop: 6,
        display: 'flex',
        flexDirection: 'row',
    },
    icon: {
        marginRight: 25
    },
    title: {
        fontSize: 18
    }
})

const RecipeCard = ({recipe}) => {
    const [isFavourite, setFavourite] = useState(false);

    const handleFavourite = () => {
        setFavourite(!isFavourite)
    }
    const handleOpenRecipe = () => {
        navigation.navigate("Recipe Details", {recipe})
    }
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.view}>
            <Pressable onPress={handleOpenRecipe}>
                <Card>
                    <Card.Title style={styles.title}>
                        {recipe.title}
                    </Card.Title>
                    <Card.Image source={{uri:recipe.image}}/>
                    <Text style={styles.text}>
                        {recipe.description}
                    </Text>
                    <View style={styles.footer}>
                        <Pressable onPress={handleFavourite} >
                            <FontAwesomeIcon style={styles.icon} icon={isFavourite ? faHeartSolid : faHeartReg}  color={isFavourite ? 'crimson' : 'black' } size={30}/>
                        </Pressable>
                        <FontAwesomeIcon icon={faShareNodes} size={30}/>
                    </View>
                </Card>
            </Pressable>
        </ScrollView>
    );
}

export default RecipeCard;