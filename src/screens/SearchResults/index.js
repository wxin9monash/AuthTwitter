import React from "react";
import { View, Text, FlatList} from 'react-native';
import Tweet from "../../components/tweet";
import feed from "../../../assets/data/feed";

const SearchResultsScreen = (props) => {
    return(
        <View>
            <FlatList
                data={feed}
                renderItem = {({item}) => <Tweet tweet={item}/>}
            />
        </View>
    );
};

export default SearchResultsScreen;
