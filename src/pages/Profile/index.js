import React, {useEffect, useState} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {
  DummyBook,
  DummyBook2,
  IconAdd,
  ILBgHeaderAuth,
  ILNullPhoto,
} from '../../assets';
import {Gap, Link} from '../../components';
import {
  HeaderProfile,
  ListReview,
  PopularBook,
} from '../../components/molecules';
import {Fire} from '../../config';
import {colors, getData, showError} from '../../utils';

const Profile = ({navigation}) => {
  const [profile, setProfile] = useState({
    name: '',
    photo: ILNullPhoto,
    location: '',
    bio: '',
    uid: '',
  });
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    getData('user').then((res) => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(data);
      getBook(data.uid);
    });
  };

  const getBook = (uid) => {
    Fire.database()
      .ref('books/')
      .orderByChild('author_id')
      .equalTo(uid)
      .limitToLast(4)
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
        setBooks(data);
      });
  };


  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={ILBgHeaderAuth} style={styles.background}>
          <HeaderProfile
            avatar={profile.photo}
            name={profile.name}
            location={profile.location}
            books={25}
            rating={5}
            bio={profile.bio}
            onPress={() => navigation.navigate('UpdateProfile')}
            onPress2={() => navigation.goBack()}
          />
          <Gap height={10} />
        </ImageBackground>

        <View style={styles.content}>
          <View style={styles.label}>
            <Text style={styles.sectionLabel}>My Book</Text>
            <Link
              title="See all"
              align="center"
              size={14}
              onPress={() => navigation.navigate('MyBook', books)}
              style={styles.icon}
            />
          </View>
          <View style={styles.wrapperScroll}>
            <Gap width={50} />
            <TouchableOpacity
              onPress={() => navigation.navigate('AddBook', profile)}
              style={styles.icon}>
              <IconAdd />
            </TouchableOpacity>
            <Gap width={50} />
            <View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.backgroundScreen} />
                {books.map((book) => {
                  return (
                    <PopularBook
                    key={book.id}
                      pic={{uri: book.data.cover}}
                      onPress={() =>
                        navigation.navigate('BookDetails', book)
                      }
                    />
                  );
                })}
                <Gap width={132} />
              </ScrollView>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.label}>
            <Text style={styles.sectionLabel}>My Review</Text>
            <Link
              title="See all"
              align="center"
              size={14}
              onPress={() => navigation.navigate('MyReview')}
            />
          </View>
          <View style={styles.wrapperScroll}>
            <Gap width={32} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <ListReview
                pic={DummyBook2}
                review="Buku yang bagus bagi seorang pesepak- bola yang baru saja mengantarkan Liverpool juara liga Inggris dan liga Champions....."
              />
              <ListReview
                pic={DummyBook2}
                review="Buku yang bagus bagi seorang pesepak- bola yang baru saja mengantarkan Liverpool juara liga Inggris dan liga Champions....."
              />
              <Gap width={16} />
            </ScrollView>
          </View>
        </View>
        <Gap height={30} />
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    borderWidth: 1,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderColor: colors.border,
  },
  content: {
    paddingHorizontal: 16,
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
  wrapperScroll: {
    flexDirection: 'row',
    marginLeft: -32,
    paddingTop: 10,
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
  },
  backgroundScreen: {
    width: '100%',
    height: 60,
    backgroundColor: colors.primary,
    borderRadius: 10,
    position: 'absolute',
    top: 50,
  },
});
