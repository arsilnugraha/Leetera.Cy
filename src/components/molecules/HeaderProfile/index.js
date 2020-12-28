import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IconBack2, IconLocation, IconSetting, IconStar} from '../../../assets';
import {colors} from '../../../utils';
import {Gap} from '../../atoms';

const HeaderProfile = ({
  avatar,
  name,
  location,
  books,
  rating,
  bio,
  onPress,
  onPress2,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.Wrapper}>
        <Image source={avatar} style={styles.avatar} />
        <View style={styles.info}>
          <View style={styles.item}>
            <Text style={styles.value}>{books}</Text>
            <Text style={styles.label}>Books</Text>
          </View>
          <View style={styles.item}>
            <View style={styles.rating}>
              <Text style={styles.value}>{rating}</Text>
              <View style={styles.iconStar}>
                <IconStar />
              </View>
            </View>
            <Text style={styles.label}>Rating</Text>
          </View>
        </View>
      </View>
      <Gap height={8} />
      {name.length > 0 && <Text style={styles.name}>{name}</Text>}
      
      <Gap height={5} />
      <View style={styles.wrapperLocation}>
        <IconLocation />
        <Text style={styles.location}>{location}</Text>
      </View>
      <Gap height={11} />
      <View style={styles.wrapperDesc}>
        <Text style={styles.bio}>{bio}</Text>
        <TouchableOpacity onPress={onPress}>
          <IconSetting />
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

export default HeaderProfile;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
  Wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 60,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 72 / 2,
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 100,
    flexWrap: 'wrap',
  },
  item: {
    width: '50%', // is 50% of container width
  },
  label: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: colors.text.tertiary,
  },
  value: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: colors.text.secondary,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStar: {
    width: 20,
    height: 20,
    marginLeft: 4,
  },
  name: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: colors.text.secondary,
  },
  wrapperLocation: {
    flexDirection: 'row',
  },
  location: {
    fontSize: 8,
    fontFamily: 'Poppins-Regular',
    color: colors.text.primary,
    marginLeft: 5,
  },
  wrapperDesc: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  bio: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: colors.text.tertiary,
    maxWidth: 225,
    marginRight: 52,
  },
  iconBack: {
      position: 'absolute',
      left: 10,
      top: 10,
  }
});
