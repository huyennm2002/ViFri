import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    HomeScreen,
    ItemScreen,
    ProfileScreen,
    FridgeScreen,
    ReminderScreen
} from '../screens';

const FridgeStack = createStackNavigator();

const BottomTabBar = createBottomTabNavigator();

function FridgeStackScreen () {
    return (
        <FridgeStack.Navigator>
            <FridgeStack.Screen name="FridgeStack" component={FridgeScreen} options={{ headerShown: false }}/>
            <FridgeStack.Screen name="Item" component={ItemScreen} />
        </FridgeStack.Navigator>
    );  
}

const AppNavigation = () => {
    return (
      <BottomTabBar.Navigator>
        <BottomTabBar.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <BottomTabBar.Screen name="Fridge" component={FridgeStackScreen} options={{ headerShown: false }}/>
        <BottomTabBar.Screen name="Reminder" component={ReminderScreen} options={{ headerShown: false }}/>
        <BottomTabBar.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
      </BottomTabBar.Navigator>
    )
}

export default AppNavigation;