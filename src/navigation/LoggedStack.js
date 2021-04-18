import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../stacks/Home';
import GenreNavigator from '../stacks/Genre';

const Stack = createStackNavigator();

const LoggedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Books" component={BookNavigator} />
      <Stack.Screen name="Genres" component={GenreNavigator} />
    </Stack.Navigator>
  )
}

export default LoggedStack;