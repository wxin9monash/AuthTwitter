// common module import
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView  } from 'react-native';
<<<<<<< HEAD
=======
import { NavigationContainer } from '@react-navigation/native';
>>>>>>> parent of 7d355640... Revert Prep
import Ionicons from '@expo/vector-icons/Ionicons';

// aws authentication modules import
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react-native';
import awsconfig from './src/aws-exports';
import HomeScreen from './src/screens/Home';
<<<<<<< HEAD
import Router from './src/navigation/Router';
import SearchResultsScreen from './src/screens/SearchResults';
Amplify.configure(awsconfig);
=======
import Tweet from './src/components/tweet';
import SearchResultsScreen from './src/screens/SearchResults';
import feed from './assets/data/feed';
>>>>>>> parent of 7d355640... Revert Prep


function App() {
  return (
<<<<<<< HEAD
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
=======
    <SafeAreaView>
      <StatusBar style="auto" />
      {/* <HomeScreen/> */}
      {/* <Tweet tweet = {tweet1}/> */}
      <SearchResultsScreen/>
    </SafeAreaView>
>>>>>>> parent of 7d355640... Revert Prep
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
