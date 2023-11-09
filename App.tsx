import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./pages/Home";
import Bmi from "./pages/Bmi";
import Calculator from "./pages/Calculator";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeMain" component={Home} options={{ headerShown: false }}/>
      <Stack.Screen name="Bmi" component={Bmi} options={{ headerShown: false }}/>
      <Stack.Screen name="Calculator" component={Calculator} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={MainStack} options={{ headerShown: false }}/>
        <Tab.Screen name="Bmi" component={Bmi} options={{ headerShown: false }}/>
        <Tab.Screen name="Calculator" component={Calculator} options={{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
