import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {DummyBook3} from '../../assets';
import {ListSmall, Header} from '../../components';
import {colors} from '../../utils';
const PopularBook = ({navigation}) => {
  return (
    <View style = {styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title="Popular Books" childPage onPress={() => navigation.goBack()} />
        <View style={styles.content}>
          <View style={styles.wrapperSection}>
            <View style={styles.item}>
              <ListSmall
                name="Now You're Gonna Believe Us"
                pic={DummyBook3}
                author="Tiere Liye"
              />
            </View>
            <View style={styles.item}>
              <ListSmall
                name="Now You're Gonna Believe Us"
                pic={DummyBook3}
                author="Tiere Liye"
              />
            </View>
            <View style={styles.item}>
              <ListSmall
                name="Now You're Gonna Believe Us"
                pic={DummyBook3}
                author="Tiere Liye"
              />
            </View>
            <View style={styles.item}>
              <ListSmall
                name="Now You're Gonna Believe Us"
                pic={DummyBook3}
                author="Tiere Liye"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PopularBook;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
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
  wrapperSection: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 13,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: colors.white,
  },
  item: {
    width: '50%', // is 50% of container width
  },
});
