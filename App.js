import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navigator from './src/navigation';
import LiveSearchScreen from './src/screens/LiveSearchScreen';
import ContactListItem from './src/components/ContactListItem';
import InformationScreen from './src/screens/InformationScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />
      {/* <LiveSearchScreen/> */}
      {/* <ContactListItem/> */}
      {/* <InformationScreen/> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
  },
});
