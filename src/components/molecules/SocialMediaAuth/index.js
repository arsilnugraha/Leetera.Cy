import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const SocialMediaAuth = ({text1, text2}) => {
  return (
    <View style={{paddingTop: 45}}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 14,
          fontFamily: 'Poppins-Regular',
        }}>
        {text1}
      </Text>
      <View
        flexDirection="row"
        justifyContent="space-between"
        style={{paddingHorizontal: 40, paddingVertical: 16}}>
        <View style={styles.containerIcon}>
          <Image source={require('../../../assets/icon/google.png')} />
        </View>
        <View style={styles.containerIcon}>
          <Image source={require('../../../assets/icon/facebook.png')} />
        </View>
        <View style={styles.containerIcon}>
          <Image source={require('../../../assets/icon/twitter.png')} />
        </View>
      </View>
      <Text
        style={{
          fontSize: 14,
          textAlign: 'center',
          fontFamily: 'Poppins-Regular',
        }}>
        {text2}
      </Text>
    </View>
  );
};

export default SocialMediaAuth;

const styles = StyleSheet.create({
  containerIcon: {
    width: 80,
    height: 50,
    borderWidth: 1,
    borderColor: '#03A9F4',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
