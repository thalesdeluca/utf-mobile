import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../stacks/Home';
import GenreNavigator from '../stacks/Genre';
import BookNavigator from '../stacks/Book';



const Stack = createStackNavigator();

const LoggedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          headerTitleAlign: 'center', 
          headerStyle: {
            elevation: 0,
            shadowColor: '#fff'
          } 
        }}
      />

      <Stack.Screen 
        name="Books" 
        component={BookNavigator} 
        options={{
          headerShown: false,
        headerTitleAlign: 'center', 
        headerStyle: {
          elevation: 0,
          shadowColor: '#fff'
        }}}
      />

      <Stack.Screen 
        name="Genres" 
        component={GenreNavigator} 
        options={{
          headerShown: false,
        headerTitleAlign: 'center', 
        headerStyle: {
          elevation: 0,
          shadowColor: '#fff'
        }}}
      />
    </Stack.Navigator>
  )
}

export default LoggedStack;