import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { ILBgFooterAuth, ILBgHeaderAuth } from '../../assets';
import {
  Button,
  FooterAuth,
  Gap,
  HeaderAuth,
  Input,
  Loading
} from '../../components';
import { Fire } from '../../config';
import { showError, storeData, useForm } from '../../utils';

const SignUp = ({navigation}) => {
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    location: '',
  });

  const dispatch = useDispatch();

  const onContinue = () => {
    if (form.password === form.confirmPassword) {
      dispatch({type: 'SET_LOADING', value: true});
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        dispatch({type: 'SET_LOADING', value: false});
        setForm('reset');
        const data = {
          name: form.name,
          email: form.email,
          location: form.location,
          uid: success.user.uid,
        };

        Fire.database()
          .ref('users/' + success.user.uid + '/')
          .set(data);

        storeData('user', data);
        navigation.navigate('UploadPhoto', data);
      })
      .catch((error) => {
        dispatch({type: 'SET_LOADING', value: false});
        var errorMessage = error.message;
        showError(errorMessage)
      });
    } else {
      showError("Please make sure your password match.")
    }
    
  };

  return (
    <>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground source={ILBgHeaderAuth} style={styles.background}>
            <HeaderAuth
              p1="Around The World"
              p2="With Book"
              p3="Create your Account"
            />
          </ImageBackground>
          <Gap height={16} />
          <View style={styles.container}>
            <Input
              placeholder="Nama"
              value={form.name}
              onChangeText={(value) => setForm('name', value)}
              paddingLeft={30}
            />
            <Gap height={16} />
            <Input
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
            <Input
              placeholder="Confirmation Password"
              value={form.confirmPassword}
              onChangeText={(value) => setForm('confirmPassword', value)}
              paddingLeft={30}
              secureTextEntry
            />
            <Gap height={16} />
            <Input
              placeholder="Location ex: Medan, Indonesia"
              value={form.location}
              onChangeText={(value) => setForm('location', value)}
              paddingLeft={30}
            />
            <Gap height={16} />
            <Button title="Sign Up" onPress={onContinue} />
          </View>
          <Gap height={30} />
          <FooterAuth
            text1="- Or Sign Up With -"
            text2="Already Have Account? "
            text3="Sign In"
            onPress={() => navigation.replace('SignIn')}
          />
          <ImageBackground source={ILBgFooterAuth} style={styles.background}>
            <Gap height={150} />
          </ImageBackground>
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    paddingHorizontal: 20,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});
