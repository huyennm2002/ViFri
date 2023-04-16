import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    SignInScreen,
    SignUpScreen,
    HomeScreen,
    ItemScreen,
    ProfileScreen,
    FridgeScreen,
    RecipesScreen, 
    RecipeDetailsScreen,
    AddItemScreen
} from '../screens';

const FridgeStack = createStackNavigator();
const RecipeStack = createStackNavigator();
const BottomTabBar = createBottomTabNavigator();

function FridgeStackScreen() {
    return (
        <FridgeStack.Navigator>
            <FridgeStack.Screen
                name="FridgeStack"
                component={FridgeScreen}
                options={{ headerShown: false }}
            />
            <FridgeStack.Screen name="Item" component={ItemScreen} />
            <FridgeStack.Screen name="AddScreen" component={AddItemScreen} />
        </FridgeStack.Navigator>
    );
}

function RecipeStackScreen() {
    return (
        <RecipeStack.Navigator>
            <RecipeStack.Screen
                name="Recipes List"
                component={RecipesScreen}
                options={{ headerShown: false }}
            />
            <RecipeStack.Screen
                name="Recipe Details"
                component={RecipeDetailsScreen}
                options={{ headerShown: false }}
            />
        </RecipeStack.Navigator>
    );
}

const Stack = createStackNavigator();

const headerOptions = ({ navigation, route }) => ({
    headerTitle: (props) => <LogoTitle {...props} />,
    headerRight: () => (
      <Button title="Update count" />
    ),
  })

function BottomTabBarFunc() {
    return (
        <BottomTabBar.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home-outline';
                    } else if (route.name === 'Fridge') {
                        iconName = 'fast-food-outline';
                    } else if (route.name === 'Recipes') {
                        iconName = 'book-outline';
                    } else if (route.name === 'Profile') {
                        iconName = 'person-outline';
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
                headerShown: false, // Hides the header for all screens in the tab bar
                tabBarActiveTintColor: 'tomato', // Sets the active tab icon color
                tabBarInactiveTintColor: 'gray', // Sets the inactive tab icon color
            })}>
            <BottomTabBar.Screen name="Home" component={HomeScreen}/>
            <BottomTabBar.Screen name="Fridge" component={FridgeStackScreen} />
            <BottomTabBar.Screen name="Recipes" component={RecipeStackScreen} />
            <BottomTabBar.Screen name="Profile" component={ProfileScreen} />
        </BottomTabBar.Navigator>
    );
}

const AppNavigation = () => {
    return (
      <Stack.Navigator screenOptions={{gestureEnabled: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Main" component={BottomTabBarFunc} options={{ headerShown: false }}/>
      </Stack.Navigator>
      
    )
}

export default AppNavigation;
