
import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { MenuItem } from '../../components';
import i18n from '../../config/lang';
import { logout } from '../Auth/ducks';
import styles from './styles';

// import { Container } from './styles';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  console.log(navigation)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <MenuItem onPress={() => navigation.navigate("Books")}>{i18n.t("books")}</MenuItem>
        <MenuItem onPress={() => navigation.navigate("Genres")}>{i18n.t("genres")}</MenuItem>
        <MenuItem onPress={() => dispatch(logout())}>{i18n.t("logout")}</MenuItem>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home;