import React, { useEffect, useState } from 'react';
import { Alert, FlatList, RefreshControl, SafeAreaView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../../components';
import GenreItem from '../../../components/GenreItem';
import i18n from '../../../config/lang';
import { deleteGenre, getGenres } from '../ducks';


const ListGenre = ({ navigation }) => {
  const { genres, loading, success } = useSelector(state => state.genres)
  const dispatch = useDispatch()
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    dispatch(getGenres())
  }, [])

  useEffect(() => {
    if(deleted && success) {
      dispatch(getGenres())
      setDeleted(false)
    }
  }, [deleted, success])

  const onDelete = (item) => {
    console.log(item)
    Alert.alert(
      i18n.t("remove"),
      `${i18n.t("wishToRemove")} ${item.name}?`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => {
          dispatch(deleteGenre(item.id))
          setDeleted(true)
        }}
      ]
    );
  }

  return (
    <SafeAreaView>
      <Button title={i18n.t("newGenre")} onPress={() => navigation.navigate("NewGenre")}/>
      <FlatList 
        data={genres}
        refreshControl={<RefreshControl colors={['black']}/>}
        refreshing={loading}
        onRefresh={() => dispatch(getGenres())}
        renderItem={({ item }) => (
          <GenreItem 
            onPress={() => navigation.navigate('NewGenre', item)} 
            onLongPress={() => onDelete(item)} 
            name={item?.name} 
          />
        )}
      />
    </SafeAreaView>
  )
}

export default ListGenre;