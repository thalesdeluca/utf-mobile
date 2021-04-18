import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

// import { Container } from './styles';

const RootNavigator = () => {
  const { user } = useSelector(state => state.auth);
  if(user) {
    return LoggedStack
  }

  return UnloggedStack;
}

export default RootNavigator;