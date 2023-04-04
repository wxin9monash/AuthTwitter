import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/Home";

// import icons
import { AntDesign } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
    return(
        <Tab.Navigator>
            <Tab.Screen
                name={"Explore"}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color})=>(
                        <AntDesign name="home" size={24} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default HomeTabNavigator;