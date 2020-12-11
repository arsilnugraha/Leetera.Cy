import React, {Component} from 'react';
import {StyleSheet, View, Image, ImageBackground} from 'react-native';
import Logoapp from './../../../assets/logo/Leeteracy.png';
import BackgroundLogo from './../../../assets/logo/BackgrounLogo.png';

export default class OnBoard extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('SignIn');
    }, 2000);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <ImageBackground source={BackgroundLogo} style={styles.background}>
            <Image source={Logoapp} />
          </ImageBackground>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
