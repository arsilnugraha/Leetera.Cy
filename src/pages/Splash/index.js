import React, {useEffect} from 'react';
import {Image, ImageBackground, StyleSheet} from 'react-native';
import BackgroundLogo from '../../assets';
import Logoapp from '../../assets/illustration/Leeteracy.png';
import {Fire} from '../../config';
import {colors} from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = Fire.auth().onAuthStateChanged((user) => {
      setTimeout(() => {
        if (user) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('SignIn');
        }
      }, 3000);
    });
    return () => unsubscribe();
  }, [navigation]);
  return (
    <ImageBackground source={BackgroundLogo} style={styles.page}>
      <Image source={Logoapp} />
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
});
