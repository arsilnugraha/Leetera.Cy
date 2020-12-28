import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {IconBack2, IconCamera} from '../../../assets';
import {colors} from '../../../utils';

const HeaderUProfile = ({pic, avatar, onPress, onPress2}) => {
  return (
    <View>
      <Image source={pic} style={styles.pic} />
      <View style={styles.photoProfile}>
        <Image source={avatar} style={styles.avatar} />
        <TouchableOpacity onPress={onPress} style={styles.update}>
          <Image source={IconCamera} style={styles.icon} />
          <Text style={styles.edit}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.iconBack}>
        <TouchableOpacity onPress={onPress2}>
          <IconBack2 />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderUProfile;

const styles = StyleSheet.create({
  pic: {
    height: 120,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  photoProfile: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -36,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 72/2
  },
  update: {
    flexDirection: 'row',
    marginTop: 8,
  },
  icon: {width: 22, height: 19},
  edit: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: colors.text.tertiary,
    marginLeft: 6,
  },
  iconBack: {
    position: 'absolute',
    left: 10,
    top: 10,
  },
});
