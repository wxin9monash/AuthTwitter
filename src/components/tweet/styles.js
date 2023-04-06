import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 20,
        marginHorizontal: 10,
        marginVertical: 10,
    },

    innercontainer: {
        margin: 20,
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 10,
    },

    image: {
        width: '30%',
        height: '100%',
        // aspectRatio: 3/2,
        resizeMode: 'cover',
        borderRadius: 10,
    },

    content:{
        flex: 1,
        marginHorizontal: 10,
    },

    emoji:{
        alignSelf: 'center',
        // flexDirection: 'row',
    },

    icons:{
        alignSelf: 'center',
    },

    username: {
        marginVertical: 10,
        fontSize: 22,
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
    },

    sentiment: {
        fontSize: 22,
    },

    credibility: {
        fontSize: 22,
        color: '#4169E1',
        textDecorationLine: 'underline',
    }
});

export default styles;