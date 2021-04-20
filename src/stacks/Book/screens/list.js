import React, { useEffect, useState } from 'react';
import { Alert, FlatList, RefreshControl, SafeAreaView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../../components';
import BookItem from '../../../components/BookItem';
import i18n from '../../../config/lang';
import { deleteBook, getBooks, saveBook } from '../ducks';

const ListBook = ({ navigation }) => {
  const { books, loading, success } = useSelector(state => state.books)
  const dispatch = useDispatch()
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    dispatch(getBooks())
  }, [])

  useEffect(() => {
    if(deleted && success) {
      dispatch(getBooks())
      setDeleted(false)
    }
  }, [deleted, success])

  const onDelete = (item) => {
    console.log(item)
    Alert.alert(
      i18n.t("remove"),
      `${i18n.t("wishToRemove")} ${item.title}?`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => {
          dispatch(deleteBook(item.id))
          setDeleted(true)
        }}
      ]
    );
  }

  return (
    <SafeAreaView>
      <Button title={i18n.t("newBook")} onPress={() => navigation.navigate("NewBook")}/>
      <FlatList 
        data={books}
        refreshControl={<RefreshControl colors={['black']}/>}
        refreshing={loading}
        onRefresh={() => dispatch(getBooks())}
        renderItem={({ item }) => (
          <BookItem 
            onPress={() => navigation.navigate('NewBook', item)} 
            onLongPress={() => onDelete(item)} 
            title={item?.title} 
            description={item?.description}
          />
        )}
      />
    </SafeAreaView>
  )
}

export default ListBook;