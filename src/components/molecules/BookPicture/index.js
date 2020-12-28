import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IconCollection, IconCollectionActive, IconBack2} from '../../../assets';
import {colors} from '../../../utils';

const BookPicture = ({pic, isSave, onPress, onPress2}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        <Image source={pic} style={styles.image}  />
      </View>
      <View style={styles.iconBack}>
        <TouchableOpacity onPress={onPress}>
          <IconBack2 />
        </TouchableOpacity>
      </View>
      <View style={styles.iconSave(isSave)}>
        <TouchableOpacity onPress={onPress2}>
          {isSave && <IconCollectionActive />}
          {!isSave && <IconCollection />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookPicture;

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  imageWrapper: {
    height: 320,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 320,
  },
  iconBack: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    position: 'absolute',
    left: 20,
    top: 40,
  },
  iconSave: (isSave) => ({
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isSave ? colors.primary : colors.white,
    right: 40,
    bottom: -20,
  }),
});
