import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ILNullPhoto } from '../../assets';
import { BookReview, Gap } from '../../components';
import BookDesc from '../../components/molecules/BookDesc';
import BookPicture from '../../components/molecules/BookPicture';
import { Fire } from '../../config';
import { colors, getData, showError, showSuccess } from '../../utils';
const BookDetails = ({navigation, route}) => {
  const dataBook = route.params;
  const [profile, setProfile] = useState({
    name: '',
    photo: ILNullPhoto,
    location: '',
    bio: '',
    uid: '',
  });
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [name, setName] = useState('');
  const [isSave, setIsSave] = useState(false);
  useEffect(() => {
    const author_id = dataBook.data.author_id;
    callBookDetails(author_id);
    checkSave();
    getUser();
  }, []);

  const checkSave = () => {
    const book_id = dataBook.data.book_id;
    const uid = profile.uid;
    Fire.database()
      .ref('collections/')
      .orderByChild('book_id')
      .equalTo(book_id)
      .on('child_added', function (snapshot) {
        let collection = snapshot.val();
        if (collection.uid == uid) {
          setIsSave(true);
        }
      });
  };

  const getUser = () => {
    getData('user').then((res) => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(data);
    });
  };

  const callBookDetails = (author_id) => {
    Fire.database()
      .ref('users/' + author_id + '/')
      .once('value')
      .then((res) => {
        setPhoto({uri: res.val().photo});
        setName(res.val().name);
      });
  };

  const saveBook = () => {
    const book_id = dataBook.data.book_id;
    const uid = profile.uid;
    const data = {
      book_id: book_id,
      uid: uid,
    };
    if (!isSave) {
      Fire.database()
        .ref('collections/')
        .push(data)
        .then(() => {
          showSuccess('Buku berhasil disimpan');
          setIsSave(true);
        })
        .catch((err) => {
          showError(err.message);
        });
    } else{
      Fire.database()
        .ref('collections/')
        .orderByChild('book_id')
        .equalTo(book_id)
        .on('child_added', function (snapshot) {
          let collection = snapshot.val();
          if (collection.uid == uid) {
            Fire.database()
              .ref('collections/' + snapshot.key + '/')
              .remove()
              .then(() => {
                setIsSave(false);
              })
              .catch((err) => {
                showError(err.message);
              });
          }
        });
    }
  };

  return (
    <View style={styles.page}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <BookPicture
          pic={{uri: dataBook.data.cover}}
          onPress={() => navigation.goBack()}
          onPress2={saveBook}
          isSave={isSave}
        />
        <View style={styles.content}>
          <Gap height={30} />
          <BookDesc
            title={dataBook.data.title}
            rating={dataBook.data.rate}
            avatar={photo}
            author={name}
            synopsis={dataBook.data.synopsis}
            pubYear={dataBook.data.pubYear}
            isbn={dataBook.data.isbn}
            supplyStore={dataBook.data.supplyStore}
          />
          <Gap height={20} />
          <BookReview
            reviewer={27}
            avatar={profile.photo}
            book_id={dataBook.data.book_id}
            uid={profile.uid}
          />
          <Gap height={20} />
        </View>
      </ScrollView>
    </View>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 20,
  },
});
