import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, ImageBackground} from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import HeaderAuth from '../../../components/molecules/HeaderAuth';
import SocialMediaAuth from '../../../components/molecules/SocialMediaAuth';
import BackgroundHeaderAuth from './../../../assets/logo/BackgroundHeaderAuth.png';
import BackgroundFooterAuth from './../../../assets/logo/BackgroundFooterAuth.png';

export default class SignIn extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <ImageBackground
            source={BackgroundHeaderAuth}
            style={styles.background}>
            <HeaderAuth
              p1="Around The World"
              p2="With Book"
              p3="Create your Account"
            />
          </ImageBackground>

          <View style={{paddingHorizontal: 20, paddingBottom: 30}}>
            <TextInput placeholder="Email" style={styles.textInputArea} />
            <View style={{position: 'relative'}}>
              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                style={styles.textInputArea}
              />

              <Image
                source={require('../../../assets/icon/Icon_view.png')}
                style={{position: 'absolute', right: 10, bottom: 25}}
              />
            </View>

            <View style={{position: 'relative'}}>
              <TextInput
                placeholder="Confirmation Password"
                secureTextEntry={true}
                style={styles.textInputArea}
              />

              <Image
                source={require('../../../assets/icon/Icon_view.png')}
                style={{position: 'absolute', right: 10, bottom: 25}}
              />
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          <SocialMediaAuth
            text1="- Or Sign Up With -"
            text2="Already Have Account? "
            text3="Sign In"
            onPress={() => this.props.navigation.replace('SignIn')}
          />
          <ImageBackground
            source={BackgroundFooterAuth}
            style={styles.background}>
            <View style={{height: 130}} />
          </ImageBackground>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInputArea: {
    borderWidth: 1,
    borderColor: '#03A9F4',
    borderRadius: 5,
    paddingHorizontal: 30,
    paddingVertical: 14,
    marginTop: 16,
    fontFamily: 'Poppins-Regular',
  },
  button: {
    backgroundColor: '#03A9F4',
    padding: 14,
    borderRadius: 5,
    marginTop: 16,
  },
  textButton: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});
