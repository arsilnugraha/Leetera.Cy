import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { launchImageLibrary } from 'react-native-image-picker';
import {
  IconAdd,
  IconRemovePhoto,
  ILBgFooterAuth,
  ILBgHeaderAuth,
  ILNullPhoto
} from '../../assets';
import { Button, Gap, Link } from '../../components';
import { Fire } from '../../config';
import { colors, showError, storeData } from '../../utils';

const UploadPhoto = ({navigation, route}) => {
  const {name, uid} = route.params;
  const [hasPhoto, setHasPhoto] = useState();
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [photoForDB, setPhotoForDB] = useState('');
  const getImage = () => {
    launchImageLibrary(
      {includeBase64: true, quality: 0.5, maxWidth: 200, maxHeight: 200},
      (response) => {
        if (response.didCancel || response.error) {
          showError('ops, sepertinya anda tidak memiliha foto nya?')
        } else {
          setPhotoForDB(`data:${response.type};base64, ${response.base64}`);
          const source = {uri: response.uri};
          setPhoto(source);
          setHasPhoto(true);
        }
      },
    );
  };

  const uploadAndContinue = () => {
    Fire.database()
      .ref('users/' + uid + '/')
      .update({photo: photoForDB});

    const data = route.params;
    data.photo = photoForDB;

    storeData('user', data);

    navigation.replace('MainApp');
  };

  return (
    <View style={styles.page}>
      <ImageBackground source={ILBgHeaderAuth} style={styles.background} />
      <TouchableOpacity style={styles.photoProfile} onPress={getImage}>
        <Image source={photo} style={styles.avatar} />
        {hasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
        {!hasPhoto && <IconAdd style={styles.addPhoto} />}
      </TouchableOpacity>
      <Text style={styles.name}>{name}</Text>
      <Gap height={30} />
      <View style={styles.button}>
        <Button
          title="Upload and Continue"
          onPress={uploadAndContinue}
          disable={!hasPhoto}
        />
        <Gap height={22} />
        <Link
          title="Skip for this"
          align="center"
          size={16}
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
      <ImageBackground source={ILBgFooterAuth} style={styles.background}>
        <Gap height={150} />
      </ImageBackground>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
    maxWidth: 36,
    maxHeight: 36,
  },
  photoProfile: {marginBottom: 30},
  name: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    color: colors.text.primary,
    textAlign: 'center',
  },
});
