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
    <View>
          <Text>
            This is a text
          </Text>
    </View>

  );
};

export default Router;