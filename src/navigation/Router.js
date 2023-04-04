import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTabNavigator from "./HomeTabNavigator";
import{ View, Text, Pressable} from 'react-native';

// import app pages 
import SearchResultsScreen from "../screens/SearchResults";

const Stack = createNativeStackNavigator();

const Router = (props) => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen
          name = "Home"
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name= "Search"
          component={SearchResultsScreen}
          options={{
            title: "Search your destination"
          }}
        />
      </Stack.Navigator> */}
      <Text>Test</Text>
    </NavigationContainer>
  );
};

export default Router;