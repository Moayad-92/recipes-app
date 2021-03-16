import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CategoriesList, MealsList, MealDetails, Favorites} from './Screens';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Platform} from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) =>
            route.name === 'Home' ? (
              <Icon name="menu" size={30} color={color} />
            ) : (
              <Icon name="heart" size={30} color={color} />
            ),
        })}
        tabBarOptions={{
          activeTintColor: '#ef6c00',
          inactiveTintColor: 'lightgray',
          labelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: -5,
            marginBottom: Platform.OS === 'android' ? 5 : 0,
          },
        }}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Favorites" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#ef6c00',
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen name="Categories" component={CategoriesList} />
      <Stack.Screen name="Meals" component={MealsList} />
      <Stack.Screen name="Meal Details" component={MealDetails} />
    </Stack.Navigator>
  );
}
export default App;
