import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import i18n from '../../config/lang';
import ListGenre from './screens/list';
import NewGenre from './screens/new';

// import { Container } from './styles';

const Stack = createStackNavigator();

const GenreNavigator = ({ navigation }) => {
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
      <Stack.Screen name="ListGenre" component={ListGenre} options={{ title: i18n.t('listGenre')}}/>
      <Stack.Screen name="NewGenre" component={NewGenre} options={{ title: i18n.t('newGenre')}}/>
    </Stack.Navigator>
  )
}

export default GenreNavigator;