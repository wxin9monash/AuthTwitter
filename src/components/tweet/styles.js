import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },

    image: {
        width: '100%',
        height: 100,
        aspectRatio: 3/2,
        resizeMode: 'cover',
        borderRadius: 10,
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
        color: '#55BCF6'
    },

    credibility: {
        fontSize: 22,
        color: '#4169E1',
        textDecorationLine: 'underline',
    }
});

export default styles;