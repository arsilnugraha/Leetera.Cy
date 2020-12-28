import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyAuthor, IconStar} from '../../../assets';
import {colors} from '../../../utils';
import {Gap} from '../../atoms';

const PopularAuthor = ({name, location}) => {
  return (
    <View style={styles.container}>
      <Image source={DummyAuthor} style={styles.avatar} />
      <View style={styles.wrapperSection}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.location}>{location}</Text>
        <View style={styles.ratingStar}>
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
        </View>
      </View>
    </View>
  );
};

export default PopularAuthor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 180
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  ratingStar: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  name: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: colors.text.secondary,
  },
  location: {
    fontSize: 6,
    fontFamily: 'Poppins-Medium',
    color: colors.text.primary,
  },
  wrapperSection: {
    maxWidth: 94,
  },
});
