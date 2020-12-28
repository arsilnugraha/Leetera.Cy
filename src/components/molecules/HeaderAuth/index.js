import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ILBook } from '../../../assets';
import { colors } from '../../../utils/';

const HeaderAuth = ({p1, p2, p3}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.title}>
          <Text style={styles.text1}>{p1}</Text>
          <Text style={styles.text2}>{p2}</Text>
        </View>
        <Image source={ILBook} />
      </View>
      <Text style={styles.formTitle}>{p3}</Text>
    </View>
  );
};

export default HeaderAuth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    paddingTop: 100,
    paddingBottom: 28,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {maxWidth: 195, maxHeight: 52},
  text1: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: colors.text.auth,
  },
  text2: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: colors.text.primary,
  },
  formTitle: {
    fontFamily: 'Poppins-Medium',
    color: colors.text.secondary,
  },
});
