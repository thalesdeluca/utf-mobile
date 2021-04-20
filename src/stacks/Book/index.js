import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import i18n from '../../config/lang';
import ListBook from './screens/list';
import NewBook from './screens/new';

const Stack = createStackNavigator();

const BookNavigator = ({ navigation }) => {
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
      <Stack.Screen name="ListBook" component={ListBook} options={{ title: i18n.t('listBook')}}/>
      <Stack.Screen name="NewBook" component={NewBook} options={{ title: i18n.t('newBook')}}/>
    </Stack.Navigator>
  )
}

export default BookNavigator;