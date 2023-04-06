import React, { useEffect, useState } from "react";
import { View, Text, FlatList} from 'react-native';
import Tweet from "../../components/Tweet";
import feed from "../../../assets/data/feed";
import axios from 'axios';

const SearchResultsScreen = ( route ) => {

    const {userText} = route.route.params;
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://twinword-sentiment-analysis.p.rapidapi.com/analyze/',
        params: {text: userText.toString()},
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

    const manualTweet = [{
        username: '@Admin',
        description: userText.toString(),
        sentiment: data.type,
        credibility: '0'
      }];

    return(
        
        <FlatList
            data={manualTweet}
            renderItem = {({item}) => <Tweet tweet={item}/>}
        />
    )
};

export default SearchResultsScreen;


            {/* <FlatList
                data={feed}
                renderItem = {({item}) => <Tweet tweet={item}/>}
            /> */}