import React from "react";
import { FlatList, View, Text} from "react-native";
import infolist from '../../../assets/data/infolist.json';
import InfoItem from "../../components/InfoListItem";
import { StyleSheet } from "react-native";

const InformationScreen = (props) => {
    return (
        <View>
            <Text style={styles.title}>
                Fake News on Twitter:           
            </Text>
            <Text style={styles.title}>
                How to Identify and Combat It
            </Text>
            <FlatList
                data={infolist}
                renderItem={({item}) => < InfoItem infolist = {item} />}
                style ={{backgroundColor: 'lightblue'}}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    title:{
        textAlign: 'center',

        fontSize: 26,
        fontWeight: 'bold',
        backgroundColor: 'lightblue'
    }
})

export default InformationScreen;
