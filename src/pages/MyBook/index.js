import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {DummyBook3, ILNullCover} from '../../assets';
import {Header, ListSmall} from '../../components';
import {Fire} from '../../config';
import {colors} from '../../utils';

const MyBook = ({navigation, route}) => {
  const books = route.params;
  const [author, setAuthor] = useState('');
  const getAuthor = (author_id) => {
    Fire.database()
      .ref('users/' + author_id + '/')
      .once('value')
      .then((res) => {
        const name = res.val().name;
        setAuthor(name)
      });
      return author
  };
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title="My Book" childPage onPress={() => navigation.goBack()} />
        <View style={styles.content}>
          <View style={styles.wrapperSection}>
            {books.map((book) => {
              return (
                <View
                key={book.id}
                 style={styles.item}>
                  <ListSmall
                    title={book.data.title}
                    pic={{uri: book.data.cover}}
                    rating={book.data.rate}
                    author={getAuthor(book.data.author_id)}
                    onPress={() =>navigation.navigate('BookDetails', book)}
                  />
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyBook;

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
    marginBottom: 90,
  },
  wrapper: {
    height: 100,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    alignItems: 'center',
    paddingTop: 60,
    marginHorizontal: -16,
  },
  wrapperSection: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 13,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    width: '50%', // is 50% of container width
  },
});
