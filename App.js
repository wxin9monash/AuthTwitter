// common module import
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

// aws authentication modules import
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react-native';
import awsconfig from './src/aws-exports';
import HomeScreen from './src/screens/Home';
import Router from './src/navigation/Router';
import SearchResultsScreen from './src/screens/SearchResults';
Amplify.configure(awsconfig);


function App() {
  return (
    <View>
      <StatusBar style="auto" />
<<<<<<< HEAD
      {/* <Router/> */}
      <SearchResultsScreen/>
    </View>
=======
      {/* <HomeScreen/> */}
      
      <Tweet tweet = {tweet1}/>
    </SafeAreaView>
>>>>>>> parent of 514b7e69... Search result screen
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withAuthenticator(App);
