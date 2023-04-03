// common module import
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import 'react-native-gesture-handler';

// aws authentication modules import
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react-native';
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);

// import pages
import HomeScreen from './src/screens/Home';
import Tweet from './src/components/tweet';
import SearchResultsScreen from './src/screens/SearchResults';
import feed from './assets/data/feed';

const tweet1 = feed[0];

function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      {/* <HomeScreen/> */}
      {/* <Tweet tweet = {tweet1}/> */}
      <SearchResultsScreen/>
    </SafeAreaView>
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
