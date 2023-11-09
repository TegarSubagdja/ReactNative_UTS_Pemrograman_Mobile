import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./pages/Home";
import Bmi from "./pages/Bmi";
import Calculator from "./pages/Calculator";
import { Image } from "react-native";
import Colors from "./constant/Colors";
import IndexNilai from "./pages/IndexNilai";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Pair from "./pages/Pair";
import Welcome from "./pages/Welcome";
import Chart from "./pages/Chart";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;

          if (route.name === "Home") {
            iconSource = focused
              ? require("./assets/icon/Home_active.png")
              : require("./assets/icon/Home.png");
          } else if (route.name === "Profile") {
            iconSource = focused
              ? require("./assets/icon/Profile_active.png")
              : require("./assets/icon/Profile.png");
          } else if (route.name === "Pair") {
            iconSource = focused
              ? require("./assets/icon/Money_active.png")
              : require("./assets/icon/Money.png");
          } else if (route.name === "Chart") {
            iconSource = focused
              ? require("./assets/icon/Chart_active.png")
              : require("./assets/icon/Chart.png");
          }

          return <Image source={iconSource} style={{ width: size, height: size }} />;
        },
        tabBarStyle: {
          backgroundColor: Colors.graySecondary,
          borderTopWidth: 0,
          height: 70,
          paddingBottom: 10,
        },
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false, tabBarHideOnKeyboard: true }} />
      <Tab.Screen name="Pair" component={Pair} options={{ headerShown: false, tabBarHideOnKeyboard: true }} />
      <Tab.Screen name="Chart" component={Chart} options={{ headerShown: false, tabBarHideOnKeyboard: true }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false, tabBarHideOnKeyboard: true }} />
    </Tab.Navigator>
  );
};


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={MainStack} options={{ headerShown: false }} />
        <Stack.Screen name="MainStack" component={MainStack} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Pair" component={Pair} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Chart" component={Chart} options={{ headerShown: false }} />
        <Stack.Screen name="Calculator" component={Calculator} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="Bmi" component={Bmi} options={{ headerShown: false }} />
        <Stack.Screen name="IndexNilai" component={IndexNilai} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
