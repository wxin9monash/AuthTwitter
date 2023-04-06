import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import{ View, Text, Pressable, Image} from 'react-native';
import styles from "./styles";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const HomeScreen = (props) => {

    const navigation = useNavigation(); 
    return(
        <View style={styles.container}>

            {/* Search bar here*/}
            <Pressable
                style = {styles.searchButton}
                onPress = {() => navigation.navigate('LiveSearch')}
            >
                <AntDesign name="search1" size={24} color="f15454" />
                <Text style = {styles.searchButtonText}>  Discover Your Tweet's Sentiment!</Text>

            </Pressable>
            
            {/* background image here */}
            <ImageBackground 
            source ={require('../../../assets/images/background.jpg')} 
            style={styles.background}>

                {/* App icon image*/}
                <Image
                    source = {require('../../../assets/app_icon.png')}
                    style={styles.icon}
                />

                <Text style={styles.title}>AuthentiTweet</Text>
                <Text style={styles.intro}>Get the facts straight with our app - the ultimate truth detector!</Text>
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate('Resources')}
                >
                    <Text style = {styles.buttonText}>Explore news Credibility</Text>

                </Pressable>

            </ImageBackground>
        </View>
    );
};

export default HomeScreen;
