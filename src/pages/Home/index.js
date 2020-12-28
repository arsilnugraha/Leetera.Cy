import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {DummyBook, ILNullPhoto} from '../../assets';
import {
  Gap,
  GenreList,
  HomeProfile,
  Link,
  PopularAuthor,
  PopularBook,
  SearchBar,
  Slider,
} from '../../components';
import {Fire} from '../../config';
import {colors, getData} from '../../utils';
const Home = ({navigation}) => {
  const [genre, setGenre] = useState([]);
  const [profile, setProfile] = useState({
    photo: ILNullPhoto,
    name: '',
  });
  const [popularBooks, setPopularBooks] = useState([]);
  useEffect(() => {
    getGenre();
    getPopularBooks();
    navigation.addListener('focus', () => {
      getUserData();
    });
  }, []);

  const getPopularBooks = () => {
    Fire.database()
      .ref('books/')
      .orderByChild('rate')
      .limitToLast(3)
      .once('value')
      .then((res) => {
        const oldData = res.val();
        const data = [];
        Object.keys(oldData).map((key) => {
          data.push({
            id: key,
            data: oldData[key],
          });
        });
        setPopularBooks(data);
      });
  };

  const getGenre = () => {
    Fire.database()
      .ref('genre_book/')
      .orderByChild('id')
      .limitToFirst(2)
      .once('value')
      .then((res) => {
        if (res.val()) {
          // setGenre(res.val());
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map((key) => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          setGenre(data);
        }
      })
      .catch((err) => {
        showError(err.message);
      });
  };

  const getUserData = () => {
    getData('user').then((res) => {
      const data = res;
      data.photo = res?.photo?.length > 1 ? {uri: res.photo} : ILNullPhoto;
      setProfile(res);
    });
  };
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.header}>
            <HomeProfile
              onPress1={() => navigation.navigate('Profile')}
              onPress2={() => navigation.navigate('Notifications')}
              photo={profile.photo}
              name={profile.name}
            />
            <SearchBar />
          </View>
          <Slider />
          <View style={styles.label}>
            <Text style={styles.sectionLabel}>Popular Book</Text>
            <Link
              title="See all"
              align="center"
              size={14}
              onPress={() => navigation.navigate('PopularBooks')}
            />
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Gap width={16} />
              {popularBooks.map((book) => {
                return (
                  <PopularBook
                    key={book.id}
                    pic={{uri: book.data.cover}}
                    onPress={() => navigation.navigate('BookDetails', book)}
                  />
                );
              })}
              <Gap width={32} />
            </ScrollView>
          </View>
          <View style={styles.label}>
            <Text style={styles.sectionLabel}>Popular Author</Text>
            <Link
              title="See all"
              align="center"
              size={14}
              onPress={() => navigation.navigate('PopularBooks')}
            />
          </View>
          <View style={styles.wrapperSection}>
            <PopularAuthor name="Michael Rosen" location="Munich, Germany" />
            <PopularAuthor
              name="Tony Hawk"
              location="California, United States"
            />
          </View>

          <View style={styles.label}>
            <Text style={styles.sectionLabel}>Genre</Text>
            <Link
              title="See all"
              align="center"
              size={14}
              onPress={() => navigation.navigate('Genre')}
            />
          </View>
          <View style={styles.genreSection}>
            {genre.map((item) => {
              return (
                <GenreList
                  key={item.data.id}
                  style={styles.item}
                  poster={item.data.image}
                  title={item.data.genre}
                  homePage
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 16,
    marginBottom: 90,
  },
  header: {
    backgroundColor: colors.primary,
    marginHorizontal: -16,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  wrapperScroll: {
    marginHorizontal: -32,
    paddingTop: 10,
  },
  label: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
  },
  sectionLabel: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: colors.text.secondary,
  },
  showAll: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: colors.text.secondary,
  },
  wrapperSection: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  genreSection: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
