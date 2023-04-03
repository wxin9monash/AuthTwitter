import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import{ View, Text, Pressable} from 'react-native';
import styles from "./styles";
import { AntDesign } from '@expo/vector-icons';

const HomeScreen = (props) => {
    return(
        <View>
            {/* Search bar here*/}
            <Pressable
                style = {styles.searchButton}
                onPress = {() => console.warn('Search Button Clicked')}
            >
                <AntDesign name="search1" size={24} color="f15454" />
                <Text style = {styles.searchButtonText}>What you want to varify</Text>

            </Pressable>

            {/* background image here */}
            <ImageBackground 
            source ={require('../../../assets/images/background.jpg')} 
            style={styles.background}>

                <Text style={styles.title}>More Info</Text>

                <Pressable
                    style={styles.button}
                    onPress={() => console.warn('Explore Button clicked')}
                >
                    <Text>Explore news Credibility</Text>

                </Pressable>

            </ImageBackground>
        </View>
    );
};

export default HomeScreen;
