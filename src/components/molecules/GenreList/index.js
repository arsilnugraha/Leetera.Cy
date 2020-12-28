import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../../utils';

const GenreList = ({poster, onPress, title, homePage}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={{uri:poster}} style={styles.poster(homePage)} />
      <Text style={styles.title(homePage)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default GenreList;

const styles = StyleSheet.create({
  poster: (homePage) => ({
    width: homePage ? 160 : 320,
    height: homePage ? 80 : 160,
    borderRadius: 10,
  }),
  title: (homePage) => ({
    position: 'absolute',
    fontFamily: 'Poppins-SemiBold',
    color: colors.white,
    fontSize: homePage ? 10 : 16,
    bottom: homePage ? 7 : 5,
    left: homePage ? 10 : 14,
  }),
});
