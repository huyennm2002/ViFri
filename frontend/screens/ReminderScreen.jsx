import { Button, View, Text, StyleSheet } from 'react-native'
import React from 'react'
import RecipeCard from '../components/RecipeCard'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    padding: 20,
    backgroundColor: '#fff',
  }
});

const ReminderScreen = () => {
    const recipes = [
      {
        id:0,
        name: "Orange chicken",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        instructions: ""
      },
      {
        id:1,
        name: "Orange chicken",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        instructions: ""
      }
    ]

    return (
      <View style={styles.container}>
          {recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}/>)}   
      </View>
     )
   }

export default ReminderScreen