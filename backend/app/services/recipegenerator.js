import axios from 'axios';

function getRecipes() {
  return axios.get('https://api.spoonacular.com/recipes/findByIngredients?apiKey=e921657faa8e45e8a2471e8c7d87062f&ingredients=apples,+flour,+sugar&number=5')
    .then(response => {
      const recipes = [];
      const data = response.data;
      data.forEach(recipe => {
        const recipeObject = {
          title: recipe.title,
          image: recipe.image,
          missedIngredients: [],
          usedIngredients: []
        };
        if (recipe.missedIngredientCount <= 3 && recipe.usedIngredientCount >= 1) {
          recipe.missedIngredients.forEach(ingredient => {
            recipeObject.missedIngredients.push({
              name: ingredient.name,
              amount: ingredient.amount
            });
          });
          recipe.usedIngredients.forEach(ingredient => {
            recipeObject.usedIngredients.push({
              name: ingredient.name,
              amount: ingredient.amount
            });
          });
          recipes.push(recipeObject);
        }
      });
      return recipes;
    })
    .catch(error => {
      console.error(error);
    });
}

getRecipes()
  .then(recipes => {
    console.log(recipes);
    // console.log(recipes[0].missedIngredients); // Log the missedIngredients array of the first recipe
    // console.log(recipes[0].usedIngredients); // Log the usedIngredients array of the first recipe
  })
  .catch(error => {
    console.error(error);
  });
        
       