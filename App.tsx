import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { HomeScreen } from "./src/Components/HomeScreen";
import { TodoScreen } from "./src/Components/TodoScreen";
import { AssignTodoScreen } from "./src/Components/AssignTodoScreen";
import { MarketScreen } from "./src/Components/MarketScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (

      <Tab.Navigator>

        <Tab.Screen name="Home" component={HomeScreen} />

        <Tab.Screen name="Todo" component={TodoScreen} />

        <Tab.Screen name="AssignTodoScreen" component={AssignTodoScreen} />

        <Tab.Screen name="Market" component={MarketScreen} />

      </Tab.Navigator>

  );

}

export default function App() {

  return (

      <NavigationContainer>

        <MyTabs />

      </NavigationContainer>

  );

};
