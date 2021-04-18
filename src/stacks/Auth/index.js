import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import Login from './screens/login';

// import { Container } from './styles';

const Stack = createStackNavigator()

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="" component={Login}/>
    </Stack.Navigator>
  );
}

export default AuthNavigator;