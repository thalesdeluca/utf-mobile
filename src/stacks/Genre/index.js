import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import ListGenre from './screens/list';
import NewGenre from './screens/new';

// import { Container } from './styles';

const Stack = createStackNavigator();

const GenreNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListGenre" component={ListGenre}/>
      <Stack.Screen name="NewGenre" component={NewGenre}/>
    </Stack.Navigator>
  )
}

export default GenreNavigator;