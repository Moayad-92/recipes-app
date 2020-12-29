import React from 'react';
import {SafeAreaView, View,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {CategoriesList, MealsList, MealDetails} from './Pages';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Categories' component={CategoriesList}/>
        <Stack.Screen name='Meals' component={MealsList}/>
        <Stack.Screen name='Meal Details' component={MealDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
