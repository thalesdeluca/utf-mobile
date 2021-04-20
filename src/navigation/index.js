import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import LoggedStack from './LoggedStack';
import UnloggedStack from './UnloggedStack';

// import { Container } from './styles';

const RootNavigator = () => {
  const { user } = useSelector(state => state.auth);
  console.log(user)

  if(user) {
    return <LoggedStack />
  }

  return <UnloggedStack />;
}

export default RootNavigator;