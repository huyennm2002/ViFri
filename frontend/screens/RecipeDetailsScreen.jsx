import { Card } from '@rneui/base';
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Header from '../components/Header';
const RecipeDetailsScreen = ({ route, navigation }) => {
  const { recipe } = route.params;
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
      <Header />
      <SafeAreaView>
        <Card>
          <Card.Title h1>
            {recipe.title}
          </Card.Title>
          <Card.Divider />
          <Card.Image source={{ uri: recipe.image }} />
          <Card.FeaturedSubtitle style={styles.subTitle} h4>Used Ingredients: </Card.FeaturedSubtitle>
          <View>
            {recipe.usedIngredients.map(item => <Text key={item.name} style={styles.item}>• {item.name}</Text>)}
          </View>
          <Card.FeaturedSubtitle style={styles.subTitle} h4> Missing Ingredients: </Card.FeaturedSubtitle>
          <View>
            {recipe.missedIngredients.map(item => <Text key={item.name} style={styles.item}>• {item.name}</Text>)}
          </View>
          <Card.FeaturedSubtitle style={styles.subTitle} h4> Instructions: </Card.FeaturedSubtitle>
          <Text style={styles.instructions}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </Text>
        </Card>
      </SafeAreaView>
    </View>

  )
}

export default RecipeDetailsScreen;
