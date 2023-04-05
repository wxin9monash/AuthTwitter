import React from "react";
import { FlatList, View, Text} from "react-native";
import infolist from '../../../assets/data/infolist.json';
import InfoItem from "../../components/InfoListItem";

const InformationScreen = (props) => {
    return (
        <View>
            <FlatList
                data={infolist}
                renderItem={({item}) => < InfoItem infolist = {item} />}
                style ={{backgroundColor: 'lightblue'}}
            />
        </View>
    )
};

export default InformationScreen;
