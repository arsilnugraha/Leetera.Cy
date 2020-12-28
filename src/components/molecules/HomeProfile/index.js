import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IconNotification, ILNullPhoto } from '../../../assets';
import { colors, getData } from '../../../utils';

const HomeProfile = ({onPress1, onPress2, photo, name}) => {
  // const [profile, setProfile] = useState({
  //   photo: ILNullPhoto,
  //   name: '',
  //   email: '',
  // });

  // useEffect(() => {
  //   getData('user').then((res) => {
  //     const data = res;
  //       data.photo = {uri: res.photo};
  //       setProfile(data)
  //   });
  // }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.profile} onPress={onPress1}>
        <Image source={photo} style={styles.avatar} />
        <Text style={styles.text}>Hi, </Text>
        <Text style={styles.name}>{name}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.notification} onPress={onPress2}>
        <IconNotification />
        <View style={styles.notif} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 16,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 48/2,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: colors.white,
  },
  name: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: colors.white,
    textTransform: 'capitalize'
  },
  notification: {
    width: 26,
    height: 27,
  },
  notif: {
    width: 6,
    height: 6,
    borderRadius: 3,
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: colors.item.primary,
  },
});
