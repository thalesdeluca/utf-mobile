import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import Login from './screens/login';
import Register from './screens/register';

// import { Container } from './styles';

const Stack = createStackNavigator()

const AuthNavigator = ({ navigation }) => {

  return (
    <Stack.Navigator 
    screenOptions={{ 
      headerTitleAlign: 'center', 
      headerLeft: navigation.canGoBack() && HeaderBackButton,
      headerStyle: {
        elevation: 0,
        shadowColor: '#fff'
      } 
    }}>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Register" component={Register}/>
    </Stack.Navigator>
  );
}

export default AuthNavigator;