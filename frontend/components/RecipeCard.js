import { View, StyleSheet, Text } from 'react-native';
import { Card } from '@rneui/themed';
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        marginTop: 10,
    }
})
const RecipeCard = ({recipe}) => {
    return (
        <View style={styles.card}>
            <Card>
                <Card.Title>
                    {recipe.name}
                </Card.Title>
                <Text>
                    {recipe.description}
                </Text>
            </Card>
        </View>
    );
}

export default RecipeCard;