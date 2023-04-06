import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axios from 'axios';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: 'https://twinword-sentiment-analysis.p.rapidapi.com/analyze/',
      params: {text: 'great value in its price range!'},
      headers: {
        'X-RapidAPI-Key': '6fa5d008b2mshb93dc563ee1b444p14a882jsn0269ce41de16',
        'X-RapidAPI-Host': 'twinword-sentiment-analysis.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text>Data from API:</Text>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyComponent;