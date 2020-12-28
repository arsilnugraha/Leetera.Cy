import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlightComponent,
  View,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {DummyBook2, IconDark, IconLight, IconSuccess} from '../../assets';
import {List, Header, Button, Link} from '../../components';
import {Fire} from '../../config';
import {colors, getData, showError, storeData} from '../../utils';

const Download = ({navigation}) => {
  const [darkMode, setDarkMode] = useState();
  const [profile, setProfile] = useState({});
  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      setProfile(data);
      setDarkMode(data.darkMode);
    });
  }, []);

  const changeMode = () => {
    darkMode ? setDarkMode(false) : setDarkMode(true);
  };
  const update = () => {
    const data = profile;
    data.darkMode = darkMode;
    Fire.database()
      .ref('users/' + profile.uid + '/')
      .update({darkMode: data.darkMode})
      .then(() => {
        storeData('user', data);
      })
      .catch((err) => {
        showError(err.message);
      });
  }

  const signOut = () => {
    Fire.auth()
      .signOut()
      .then((res) => {
        navigation.replace('SignIn');
      })
      .catch((err) => {
        showError(err.message);
      });
  };

  return (
    <View style={styles.page(darkMode)}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title="Pengaturan " />
        <View style={styles.content}>
          <View style={styles.wrapperSection}>
            <View style={styles.mode}>
              <Text style={styles.label}>Mode</Text>
              <TouchableOpacity onPress={changeMode}>
                {darkMode ? <IconDark /> : <IconLight />}
              </TouchableOpacity>
            </View>

            {/* <List
              page="Download"
              pic={DummyBook2}
              title="Robbo : Now You're Gonna Believe US"
              author="Andrew Robertson"
              icon={<IconSuccess />}
            />
            <List
              page="Download"
              pic={DummyBook2}
              title="Robbo : Now You're Gonna Believe US"
              author="Andrew Robertson"
              icon={<IconSuccess />}
            />
            <List
              page="Download"
              pic={DummyBook2}
              title="Robbo : Now You're Gonna Believe US"
              author="Andrew Robertson"
              icon={<IconSuccess />}
            />
            <List
              page="Download"
              pic={DummyBook2}
              title="Robbo : Now You're Gonna Believe US"
              author="Andrew Robertson"
              icon={<IconSuccess />}
            /> */}
          </View>
          {/* <Button
              title="Simpan"
              onPress={update}
            /> */}
          <Button
              title="Logout"
              onPress={signOut}
            />
        </View>
      </ScrollView>
    </View>
  );
};

export default Download;

const styles = StyleSheet.create({
  page: (darkMode) => ({
    flex: 1,
    backgroundColor: darkMode
      ? colors.mode.dark.background
      : colors.mode.light.background,
  }),
  content: {
    paddingHorizontal: 16,
    marginBottom: 90,
  },
  wrapper: {
    height: 100,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    alignItems: 'center',
    paddingTop: 60,
    marginHorizontal: -16,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: colors.white,
  },
  wrapperSection: {
    marginVertical: 20,
  },
  mode: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: colors.text.primary,
  },
});
