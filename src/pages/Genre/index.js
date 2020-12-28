import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { GenreList, Header } from '../../components';
import { Fire } from '../../config';
import { colors } from '../../utils';

const Genre = ({navigation}) => {
  const [genre, setGenre] = useState([]);
  useEffect(() => {
    Fire.database()
      .ref('genre_book/')
      .once('value')
      .then((res) => {
        if (res.val()) {
          setGenre(res.val());
        }
      })
      .catch((err) => {
        showError(err.message);
      });
  }, []);
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          title="Genre of Books"
          childPage
          onPress={() => navigation.goBack()}
        />

        <View style={styles.content}>
          {genre.map((item) => {
            return (
              <View style={styles.wrapperSection}>
                <GenreList poster={item.image} title={item.genre} />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Genre;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  wrapperSection: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  item: {
    width: '50%', // is 50% of container width
  },
});
