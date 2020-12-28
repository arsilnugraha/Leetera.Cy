import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { ILBgFooterAuth, ILBgHeaderAuth } from '../../assets';
import {
  Button,
  FooterAuth,
  Gap,
  HeaderAuth,
  Input
} from '../../components';
import { Fire } from '../../config';
import { colors, showError, storeData, useForm } from '../../utils';

const SignIn = ({navigation}) => {
  const [form, setForm] = useForm({email: '', password: ''});
  const dispatch = useDispatch();
  const login = () => {
    dispatch({type: 'SET_LOADING', value: true});
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        dispatch({type: 'SET_LOADING', value: false});
        Fire.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then((resDB) => {
            if (resDB.val()) {
              storeData('user', resDB.val());
              navigation.replace('MainApp');
            }
          });
      })
      .catch((err) => {
        dispatch({type: 'SET_LOADING', value: false});
        showError(err.message);
      });
  };
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={ILBgHeaderAuth} style={styles.background}>
          <HeaderAuth
            p1="Welcome to"
            p2="Leetera.cy"
            p3="Login to your account"
          />
        </ImageBackground>
        <Gap height={16} />
        <View style={styles.container}>
          <Input
            type="Email"
            placeholder="Email"
            value={form.email}
            onChangeText={(value) => setForm('email', value)}
            paddingLeft={30}
          />
          <Gap height={16} />
          <Input
            placeholder="Password"
            value={form.password}
            onChangeText={(value) => setForm('password', value)}
            paddingLeft={30}
            secureTextEntry
          />
          <Gap height={16} />
          <Button title="Sign In" onPress={login} />
        </View>
        <Gap height={30} />
        <Text style={styles.forgotPassword}>Forgot Password ?</Text>
        <FooterAuth
          text1="- Or Sign in with -"
          text2="Don't Have an Account ? "
          text3="Sign Up"
          onPress={() => navigation.replace('SignUp')}
        />
        <ImageBackground source={ILBgFooterAuth} style={styles.background}>
          <Gap height={150} />
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    paddingHorizontal: 20,
  },
  forgotPassword: {
    fontSize: 14,
    color: '#047AF8',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
});
