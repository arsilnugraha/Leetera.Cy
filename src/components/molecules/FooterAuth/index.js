import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILFacebook, ILGoogle, ILTwitter, ILBgFooterAuth} from '../../../assets';
import {Gap} from '../../../components/atoms';
import {colors} from '../../../utils';

const FooterAuth = ({text1, text2, text3, onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text1}</Text>
      <View
        flexDirection="row"
        justifyContent="space-between"
        style={styles.logo}>
        <View style={styles.containerLogo}>
          <Image source={ILGoogle} />
        </View>
        <View style={styles.containerLogo}>
          <Image source={ILFacebook} />
        </View>
        <View style={styles.containerLogo}>
          <Image source={ILTwitter} />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>
          {text2}
          <Text onPress={onPress} style={styles.link}>
            {text3}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default FooterAuth;

const styles = StyleSheet.create({
  container: {paddingTop: 45},
  title: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  logo: {paddingHorizontal: 40, paddingVertical: 16},
  containerLogo: {
    width: 80,
    height: 50,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  link: {color: colors.link},
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});
