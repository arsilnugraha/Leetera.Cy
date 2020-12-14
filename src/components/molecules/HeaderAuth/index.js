import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const HeaderAuth = ({p1, p2, p3}) => {
  return (
    <View style={{paddingHorizontal: 20}}>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 100,
          paddingBottom: 28,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{width: 195, height: 52}}>
          <Text style={[styles.title, {color: '#7DC9E7'}]}>{p1}</Text>
          <Text style={[styles.title, {color: '#03A9F4'}]}>{p2}</Text>
        </View>
        <Image source={require('../../../assets/icon/book.png')} />
      </View>
      <Text style={{fontSize: 14, fontFamily: 'Poppins-Regular'}}>
        {p3}
      </Text>
    </View>
  );
};

export default HeaderAuth;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },
});
