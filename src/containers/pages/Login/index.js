import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ImageBackground } from 'react-native'
import Logoapp from './../../../assets/logo/Leeteracy.png' 
import BackgroundLogo from './../../../assets/logo/BackgrounLogo.png' 

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1}}>
                    <ImageBackground source={BackgroundLogo} style={styles.image}>
                        <Image source={Logoapp} />
                    </ImageBackground>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      alignItems: 'center',
      justifyContent: 'center'
    },
  });
