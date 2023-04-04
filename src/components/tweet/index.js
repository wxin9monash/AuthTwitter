import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';

const days = 7;

const Tweet = (props) => {

  const tweet = props.tweet;

  const navigation = useNavigation();

  const goTotweetPage = () => {
    navigation.navigate('tweet', {tweetId: tweet.id});
  }

  return (
    <Pressable onPress={goTotweetPage} style={styles.container}>
      {/* Image  */}
      <Image
        style={styles.image}
        source={{uri: tweet.image}}
      />

      {/* Bed & Bedroom  */}
      <Text style={styles.bedrooms}>
        {tweet.bed} bed {tweet.bedroom} bedroom
      </Text>

      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={2}>
        {tweet.type}. {tweet.title}
      </Text>

      {/*  Old price & new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${tweet.oldPrice}</Text>
        <Text style={styles.price}>  ${tweet.newPrice} </Text>
        / night
      </Text>

      {/*  Total price */}
      <Text style={styles.totalPrice}>${tweet.newPrice * days} total</Text>
    </Pressable>
  );
};

export default tweet;