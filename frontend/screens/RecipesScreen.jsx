import { Button, View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import RecipeCard from '../components/RecipeCard'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    padding: 1,
    backgroundColor: '#fff',
  }
});

const RecipesScreen = () => {
    const recipes = [
      {
        id:0,
        name: "Orange chicken",
        image:"https://tipbuzz.com/wp-content/uploads/Chinese-Orange-Chicken-thumbnail-500x500.jpg",
        description: "Lorem ipsum dolor sit amet.",
        instructions: "",
        usedItems: [
          "carrot",
          "chicken",
          "potatotes"
        ],
        missedItems: [
          "carrot",
          "chicken",
          "potatotes"
        ]
      },
      {
        id:1,
        name: "Broccoli Beef",
        image:"https://www.kitchensanctuary.com/wp-content/uploads/2021/01/Beef-and-Broccoli-square-FS.jpg",
        description: "Lorem ipsum dolor sit amet.",
        instructions: "",
        usedItems: [
          "carrot",
          "chicken",
          "potatotes"
        ],
        missedItems: [
          "carrot",
          "chicken",
          "potatotes"
        ]
      },
      {
        id:2,
        name: "Teriyaki Chicken",
        image:"https://simplyhomecooked.com/wp-content/uploads/2019/02/teriyaki-chicken-recipe-n-500x500.jpg",
        description: "Lorem ipsum dolor sit amet.",
        instructions: "",
        usedItems: [
          "carrot",
          "chicken",
          "potatotes"
        ],
        missedItems: []
      }
    ]

    return (
      <ScrollView style={styles.container}>
          {recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}/>)}   
      </ScrollView>
     )
   }

export default RecipesScreen