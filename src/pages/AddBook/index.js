import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {DummyBook2, ILNullCover} from '../../assets';
import {AddPhotoBook, Button, Gap, Header, Input} from '../../components';
import {launchImageLibrary} from 'react-native-image-picker';
import {Fire} from '../../config';
import {colors, showError, showSuccess, useForm} from '../../utils';
import {Picker} from '@react-native-community/picker';

const AddBook = ({navigation, route}) => {
  const user = route.params;
  const [cover, setCover] = useState(ILNullCover);
  const [photoForDB, setPhotoForDB] = useState('');
  const [form, setForm] = useForm({
    title: '',
    isbn: '',
    pubYear: '',
    cover: '',
    publisher: '',
    supplyStore: '',
    synopsis: '',
    genre: '',
  });

  const onContinue = () => {
    const data = {
      title: form.title,
      isbn: form.isbn,
      pubYear: form.pubYear,
      synopsis: form.synopsis,
      publisher: form.publisher,
      supplyStore: form.supplyStore,
      author_id: user.uid,
      cover: photoForDB,
      genre: form.genre,
    };
    if  (form.genre == 0) {
      showError('Anda belum memasukkan genre buku');
    } else {
      Fire.database()
        .ref('books/')
        .push(data)
        .then(() => {
          showSuccess('Buku berhasil ditambahkan');
          setForm('reset');
          setCover(ILNullCover);
        })
        .catch((err) => {
          showError(err.message);
        });
    }
  };

  const getImage = () => {
    launchImageLibrary(
      {includeBase64: true, quality: 0.5, maxWidth: 200, maxHeight: 200},
      (response) => {
        if (response.didCancel || response.error) {
          showError('ops, sepertinya anda tidak memiliha foto nya?');
        } else {
          setPhotoForDB(`data:${response.type};base64, ${response.base64}`);
          const source = {uri: response.uri};
          setCover(source);
        }
      },
    );
  };
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          title="Add Your Book"
          childPage
          onPress={() => navigation.goBack()}
        />
        <View style={styles.wrapper}>
          <Input
            placeholder="Judul Buku"
            paddingLeft={12}
            value={form.title}
            onChangeText={(value) => setForm('title', value)}
          />
          <Gap height={17} />
          <View style={styles.sectionWrapper}>
            <View style={styles.item1}>
              <Input
                placeholder="ISBN"
                paddingLeft={12}
                value={form.isbn}
                onChangeText={(value) => setForm('isbn', value)}
              />
              <Gap height={17} />
              <Input
                placeholder="Tahun Terbit"
                paddingLeft={12}
                value={form.pubYear}
                onChangeText={(value) => setForm('pubYear', value)}
              />
              <Gap height={17} />
              <Input
                placeholder="Penerbit"
                paddingLeft={12}
                value={form.publisher}
                onChangeText={(value) => setForm('publisher', value)}
              />
            </View>
            <View style={styles.item2}>
              <AddPhotoBook pic={cover} onPress={getImage} />
            </View>
          </View>
          <Gap height={17} />
          <View style={styles.picker}>
            <Picker
              selectedValue={form.genre}
              onValueChange={(value) => setForm('genre', value)}>
              <Picker.Item label="Genre" value="0" />
              <Picker.Item label="Teknologi" value="1" />
              <Picker.Item label="Fiksi" value="2" />
              <Picker.Item label="Olahraga" value="3" />
              <Picker.Item label="Psikologi" value="4" />
              <Picker.Item label="Sains" value="5" />
              <Picker.Item label="Bisnis" value="6" />
              <Picker.Item label="Non Fiksi" value="7" />
              <Picker.Item label="Religi" value="8" />
              <Picker.Item label="Novel" value="9" />
              <Picker.Item label="Anak-Anak" value="10" />
            </Picker>
          </View>
          <Gap height={17} />
          <Input
            placeholder="Toko penyedia"
            paddingLeft={12}
            value={form.supplyStore}
            onChangeText={(value) => setForm('supplyStore', value)}
          />
          <Gap height={17} />
          <Input
            placeholder="Sinopsis"
            paddingLeft={12}
            value={form.synopsis}
            onChangeText={(value) => setForm('synopsis', value)}
            textArea
            numberOfLines={25}
          />
          <Gap height={17} />
          <Button title="Simpan" onPress={onContinue} />
        </View>
      </ScrollView>
    </View>
  );
};

export default AddBook;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  sectionWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item1: {
    width: 204,
  },
  item2: {
    marginLeft: 16,
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
    maxWidth: 36,
    maxHeight: 36,
  },
  picker: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
  },
});
