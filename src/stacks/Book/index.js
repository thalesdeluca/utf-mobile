import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import ListBook from './screens/list';
import NewBook from './screens/new';

const Stack = createStackNavigator();

const BookNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListBook" component={ListBook}/>
      <Stack.Screen name="NewBook" component={NewBook}/>
    </Stack.Navigator>
  )
}

export default BookNavigator;