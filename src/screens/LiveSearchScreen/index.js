import React,{useState} from "react";
import { View, Text, TextInput, FlatList, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import searchResults from '../../../assets/data/search';
import { useNavigation } from "@react-navigation/native";
import SearchResultsScreen from '../../screens/SearchResult';
import HomeScreen from '../Home';


const LiveSearchScreen = (props) =>{

    const navigation = useNavigation();
    const [text, setText] = useState('');

    return(
        <View style={styles.container}>
            {/* Input component */}
            <TextInput
                style={styles.textInput}
                placeholder="Enter text for sentiment analyis"
                value={text}
                onChangeText={setText}
                multiline
                numberOfLines={4}
            />


            {/* List of match users */}
            {/* <FlatList
                data={searchResults}
                renderItem={({item})=> (
                    <View style={styles.row}>
                        <Text>{item.description}</Text>
                    </View>
                )}
            /> */}

            {/* Button to do the search */}

            <Pressable 
                onPress={()=> navigation.navigate('Results',{userText: text})}
                style={{
                    marginBottom: 20,
                    backgroundColor: 'lightblue',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 50,
                    marginHorizontal: 20,
                    borderRadius: 10,           
                }}>
                <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>Search</Text>
            </Pressable>

        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        margin: 20,

    },
    textInput:{
        fontSize:20,
        margin: 20,
        alignItems: 'center',
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:15,
        borderBottomWidth:1,
        borderColor: 'lightgrey'
    },
    iconContainer:{
        backgroundColor: '#d4d4d4',
        padding: 7,
        borderRadius: 10,
        marginRight: 15,
    },
    userText:{

    }
})

export default LiveSearchScreen;