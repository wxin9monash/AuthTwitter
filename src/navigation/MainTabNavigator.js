import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NotImplementedScreen from '../screens/NotImplementedScreen';
import HomeScreen from '../screens/Home';
import SearchResultsScreen from '../screens/SearchResult';
import { Ionicons, Entypo } from '@expo/vector-icons';
import InformationScreen from '../screens/InformationScreen'
import LiveSearchScreen from '../screens/LiveSearchScreen'
import MyComponent from '../screens/test'

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarStyle: { backgroundColor: 'whitesmoke' },
        headerStyle: { backgroundColor: 'whitesmoke' },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      {/* <Tab.Screen
        name="Results"
        component={SearchResultsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="laptop-outline" size={size} color={color} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Resources"
        component={InformationScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book-outline" size={size} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Chats"
        component={ChatsScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-chatbubbles-sharp" size={size} color={color} />
          ),
          headerRight: () => (
            <Entypo
              onPress={() => navigation.navigate('Contacts')}
              name="new-message"
              size={18}
              color={'royalblue'}
              style={{ marginRight: 15 }}
            />
          ),
        })}
      /> */}

      {/* <Tab.Screen
        name="Settings"
        component={NotImplementedScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
