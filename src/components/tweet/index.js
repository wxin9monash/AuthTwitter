import React from "react";
import { View, Text, Image} from 'react-native';
import styles from "./styles";
import Icon from 'react-native-vector-icons/Ionicons';

const Tweet = (props) => {
    const tweet = props.tweet;

    const getIcon = (text) => {
        switch (text) {
          case 'positive':
            return 'happy-outline';
          case 'negative':
            return 'sad-outline';
          case 'neutral':
            return 'remove-circle-outline';
          default:
            return 'help-circle-outline';
        }
      };      

      const getColor = (text) => {
        switch (text) {
          case 'positive':
            return 'green';
          case 'negative':
            return 'red';
          case 'neutral':
            return 'yellow';
          default:
            return 'green';
        }
      };  

    return(
        <View style={styles.container}>
            <View style={styles.innercontainer}>
                {/* Image */}
                <Image 
                    style={styles.image}
                    source ={require('../../../assets/images/twitter_icon.png')}>
                </Image>
            
            
                <View styles={styles.content}>
                    {/* User Name */}
                    <Text style={styles.username}>{tweet.username}</Text>

                    {/* Tweet Description*/}
                    <Text style={styles.description}> {tweet.description}</Text>

                    {/* Tweet Description*/}
                    <Text style={styles.description}>   </Text>

                    {/* Credibility Score */}
                    {/* <Text style={styles.credibility}> {tweet.credibility}</Text> */}
                </View>
            </View>
            <View style = {styles.emoji}>
                        <Icon style ={styles.icons} name={getIcon(tweet.sentiment)} size={50} color={getColor(tweet.sentiment)} />

                        {/* Sentiment Analysis */}
                        <Text style={styles.sentiment}>Sentiment-{tweet.sentiment}</Text>
            </View>

        </View>
        

    );
};

export default Tweet;