import React from "react";
import { View, Text, Image} from 'react-native';
import styles from "./styles";

const Tweet = (props) => {
    const tweet = props.tweet;

    return(
        <View style={styles.container}>
            {/* Image */}
            <Image 
                style={styles.image}
                source ={require('../../../assets/images/twitter_icon.png')}>
            </Image>
            
            {/* User Name */}
            <Text style={styles.username}>{tweet.username}</Text>

            {/* Tweet Description*/}
            <Text style={styles.description}> {tweet.description}</Text>

            {/* Sentiment Analysis */}
            <Text style={styles.sentiment}> {tweet.sentiment}</Text>

            {/* Credibility Score */}
            <Text style={styles.credibility}> {tweet.credibility}</Text>

        </View>

    );
};

export default Tweet;