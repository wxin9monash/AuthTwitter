import React from "react";
import { View, Text, Image} from 'react-native';
import { StyleSheet } from "react-native";

const InfoItem = (props) => {
    const infolist = props.infolist;

    return(
        <View style={styles.container}>
            {/* Image */}
            <Image 
                style={styles.image}
                source ={{uri : infolist.image}}>
            </Image>
            
            {/* User Name */}
            <Text style={styles.title}>{infolist.title}</Text>

            {/* Tweet Description*/}
            <Text style={styles.description}> {infolist.description}</Text>

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        margin: 20,
        alignItems: 'center'
    },

    image: {
        width: 100,
        height: 100,
        // aspectRatio: 3/2,
        resizeMode: 'cover',
        borderRadius: 10,

    },

    title: {
        marginVertical: 10,
        fontSize: 22,
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        textAlign:"center",
    }
});

export default InfoItem;