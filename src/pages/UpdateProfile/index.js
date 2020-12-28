import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {ILHeaderUProfile, ILNullPhoto} from '../../assets';
import {Button, Gap, HeaderUProfile, Input} from '../../components';
import {Fire} from '../../config';
import {colors, getData, showError, storeData} from '../../utils';

const UpdateProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    location: '',
    bio: '',
  });
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [photoForDB, setPhotoForDB] = useState('');

  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      setPhoto({uri: res.photo});
      setPhotoForDB(res.photo)
      setProfile(data);
    });
  }, []);

  const update = () => {
    if (password.length > 0) {
      if (password.length < 6) {
        showError('Password should be at least 6 characters');
      } else if (password !== confirmPassword) {
        showError('Please make sure your password match.');
      } else {
        // update password
        updatePassword();
        updateProfileData();
        navigation.navigate('MainApp');
      }
    } else {
      updateProfileData();
      navigation.navigate('MainApp');
    }
  };

  const updatePassword = () => {
    // update password
    Fire.auth().onAuthStateChanged((user) => {
      if (user) {
        user.updatePassword(password).catch((err) => {
          showError(err.message);
        });
      }
    });
  };

  const updateProfileData = () => {
    const data = profile;
    data.photo = photoForDB;
    Fire.database()
      .ref(`users/${profile.uid}/`)
      .update(data)
      .then(() => {
        storeData('user', data);
      })
      .catch((err) => {
        showError(err.message);
      });
  };

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
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
          setPhoto(source);
        }
      },
    );
  };

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderUProfile
          pic={ILHeaderUProfile}
          avatar={photo}
          onPress={getImage}
          onPress2={() => navigation.goBack()}
        />
        <View style={styles.wrapper}>
          <Input
            value="Tony Hawk"
            placeholder="Nama"
            value={profile.name}
            onChangeText={(value) => changeText('name', value)}
            paddingLeft={30}
            text
          />
          <Gap height={16} />
          <Input
            value={profile.location}
            placeholder="Location"
            paddingLeft={30}
            onChangeText={(value) => changeText('location', value)}
            location
          />
          <Gap height={16} />
          <Input value={profile.email} paddingLeft={30} email disable />
          <Gap height={16} />
          <Input
            value={profile.bio}
            placeholder="Bio"
            paddingLeft={30}
            onChangeText={(value) => changeText('bio', value)}
            textArea
            numberOfLines={5}
          />
          <Gap height={16} />
          <View style={styles.line} />
          <Gap height={16} />
          <Input
            value={password}
            placeholder="Password"
            onChangeText={(value) => setPassword(value)}
            paddingLeft={30}
            secureTextEntry
          />
          <Gap height={16} />
          <Input
            value={confirmPassword}
            placeholder="Confiemasi Password"
            onChangeText={(value) => setConfirmPassword(value)}
            paddingLeft={30}
            secureTextEntry
          />
          <Gap height={16} />
          <Button title="Simpan" onPress={update} />
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {
    marginVertical: 24,
    marginHorizontal: 20,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
  },
});
