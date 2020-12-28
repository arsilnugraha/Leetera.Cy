import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IconAdd, IconBack2} from '../../../assets';

const AddPhotoBook = ({pic, onPress}) => {
  return (
    <View style={styles.wrapper}>
      <View>
        <Image source={pic} style={styles.pic} />
      </View>
            <View style={styles.icon}>
        <TouchableOpacity onPress={onPress}>
          <IconAdd />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddPhotoBook;

const styles = StyleSheet.create({
  wrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 100,
      height: 160,
      borderRadius: 10
  },
  pic: {
    width: 100,
    height: 160,
    borderRadius: 10
  },
  icon: {
    position: 'absolute',
  },
});
