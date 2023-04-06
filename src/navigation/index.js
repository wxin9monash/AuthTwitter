import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabNavigator from './MainTabNavigator';
import LiveSearchScreen from '../screens/LiveSearchScreen';
import InformationScreen from '../screens/InformationScreen'
import SearchResultsScreen from '../screens/SearchResult';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'whitesmoke' } }}>
        <Stack.Screen name="Home" component={MainTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="LiveSearch" component={LiveSearchScreen} option={{ headerShown: false}} />
        <Stack.Screen name="Search" component={InformationScreen} />
        <Stack.Screen name="Results" component={SearchResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
