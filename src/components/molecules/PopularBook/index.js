import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ILNullCover } from '../../../assets';

const PopularBook = ({pic, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={pic} style={styles.book} />
    </TouchableOpacity>
  );
};

export default PopularBook;

const styles = StyleSheet.create({
  book: {
    marginLeft: 16,
    width: 100,
    height: 160,
    borderRadius: 10
  },
});
