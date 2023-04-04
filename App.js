// common module import
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView  } from 'react-native';
import Navigator from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import 'react-native-gesture-handler';

// aws authentication modules import
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react-native';
import awsconfig from './src/aws-exports';
import HomeScreen from './src/screens/Home';
<<<<<<< HEAD
import Tweet from './src/components/tweet';
import SearchResultsScreen from './src/screens/SearchResults';
import feed from './assets/data/feed';
import Router from './src/navigation/Router';

const tweet1 = feed[0];

function App() {
  return (
    <View>
      {/* <HomeScreen/> */}
      {/* <Tweet tweet = {tweet1}/> */}
      {/* <SearchResultsScreen/> */}
      <Router />
      <StatusBar style="auto" />
    </View>
=======
Amplify.configure(awsconfig);

function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <HomeScreen/>
    </SafeAreaView>
>>>>>>> parent of 669c21a1... Tweet info display component
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
