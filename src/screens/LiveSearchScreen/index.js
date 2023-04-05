import React,{useState} from "react";
import { View, Text, TextInput, FlatList } from "react-native";
import { StyleSheet } from "react-native";
import searchResults from '../../../assets/data/search';


const LiveSearchScreen = (props) =>{

    const [inputText, setInputText] = useState('');

    return(
        <View style={styles.container}>
            {/* Input component */}
            <TextInput
                style={styles.textInput}
                placeholder="Who do you want to search?"
                value={inputText}
                onChangeText={setInputText}
            />


            {/* List of match users */}
            <FlatList
                data={searchResults}
                renderItem={({item})=> (
                    <View style={styles.row}>
                        <Text>{item.description}</Text>
                    </View>
                )}
            />

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