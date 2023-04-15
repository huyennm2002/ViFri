import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    HomeScreen,
    ItemScreen,
    ProfileScreen,
    FridgeScreen,
    RecipesScreen, 
    RecipeDetailsScreen
} from '../screens';

const FridgeStack = createStackNavigator();
const RecipeStack = createStackNavigator();
const BottomTabBar = createBottomTabNavigator();

function FridgeStackScreen () {
    return (
        <FridgeStack.Navigator>
            <FridgeStack.Screen name="Fridge" component={FridgeScreen} options={{ headerShown: false }}/>
            <FridgeStack.Screen name="Item" component={ItemScreen} />
        </FridgeStack.Navigator>
    );  
}

function RecipeStackScreen() {
    return (
        <RecipeStack.Navigator>
            <RecipeStack.Screen name="Recipes List" component={RecipesScreen} options={{ headerShown: false }}/>
            <RecipeStack.Screen name="Recipe Details" component={RecipeDetailsScreen} options={{ headerShown: false }}/>
        </RecipeStack.Navigator>
    )
}

const AppNavigation = () => {
    return (
      <BottomTabBar.Navigator>
        <BottomTabBar.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <BottomTabBar.Screen name="Fridge" component={FridgeStackScreen} options={{ headerShown: false }}/>
        <BottomTabBar.Screen name="Recipes" component={RecipeStackScreen} options={{ headerShown: false }}/>
        <BottomTabBar.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
      </BottomTabBar.Navigator>
    )
}

export default AppNavigation;