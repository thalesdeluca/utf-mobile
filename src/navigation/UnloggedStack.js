import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import AuthNavigator from '../stacks/Auth';

const Stack = createStackNavigator();

const UnloggedStack = () => {

  return (
    <Stack.Navigator screenOptions={{  headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthNavigator} />
    </Stack.Navigator>
  );
}

export default UnloggedStack;