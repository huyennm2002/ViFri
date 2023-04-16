import { Button, View, Text, StyleSheet, ScrollView } from 'react-native'
import React,  {useState, useEffect} from 'react'
import * as SecureStore from 'expo-secure-store';
import RecipeCard from '../components/RecipeCard'
import Header from '../components/Header';
import axios from 'axios';
import { LOCAL_IP } from '../constants/constants.js';
import { Alert } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    padding: 1,
    backgroundColor: '#fff',
  }
});

const RecipesScreen = () => {

  // const recipes = [
  //   {
  //     id: 0,
  //     name: "Orange chicken",
  //     image: "https://tipbuzz.com/wp-content/uploads/Chinese-Orange-Chicken-thumbnail-500x500.jpg",
  //     description: "Lorem ipsum dolor sit amet.",
  //     instructions: "",
  //     usedItems: [
  //       "carrot",
  //       "chicken",
  //       "potatotes"
  //     ],
  //     missedItems: [
  //       "carrot",
  //       "chicken",
  //       "potatotes"
  //     ]
  //   },
  //   {
  //     id: 1,
  //     name: "Broccoli Beef",
  //     image: "https://www.kitchensanctuary.com/wp-content/uploads/2021/01/Beef-and-Broccoli-square-FS.jpg",
  //     description: "Lorem ipsum dolor sit amet.",
  //     instructions: "",
  //     usedItems: [
  //       "carrot",
  //       "chicken",
  //       "potatotes"
  //     ],
  //     missedItems: [
  //       "carrot",
  //       "chicken",
  //       "potatotes"
  //     ]
  //   },
  //   {
  //     id: 2,
  //     name: "Teriyaki Chicken",
  //     image: "https://simplyhomecooked.com/wp-content/uploads/2019/02/teriyaki-chicken-recipe-n-500x500.jpg",
  //     description: "Lorem ipsum dolor sit amet.",
  //     instructions: "",
  //     usedItems: [
  //       "carrot",
  //       "chicken",
  //       "potatotes"
  //     ],
  //     missedItems: []
  //   }
  // ]
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = (token) => {
    axios({
      url: `http://${LOCAL_IP}:3005/recipes`,
      method: "GET",
      headers: { 
        "Access-Control-Allow-Origin": "*",
        token
      }
    }).then((res) => {
      console.log(res.data);
      setRecipes(res.data);
    }).catch((e) => {
      Alert.alert(e.message);
    })
  }

  const getToken = () => {
    SecureStore.getItemAsync('token')
    .then((res)=> fetchRecipes(res))
    .catch((e) => console.log(e));
  }
  console.log(recipes);
  return (
    <View style={{ flex: 1 }}>
      <Header></Header>
      <Button
        title="Get suggestions"
        onPress={getToken}
      />
      {recipes.length > 0 &&
      <ScrollView style={styles.container}>
        {recipes.map(recipe => <RecipeCard key={recipe.title} recipe={recipe} />)}
      </ScrollView>}
    </View>
  )
}

export default RecipesScreen