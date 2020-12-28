import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {DummyAuthor, DummyBook3} from '../../assets';
import {Header, ListSmall} from '../../components';
import {colors} from '../../utils';

const PopularAuthors = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title="Popular Author" onPress={() => navigation.goBack()} childPage />
        <View style={styles.content}>
          <View style={styles.wrapperSection}>
            <View style={styles.item}>
              <ListSmall
                name="Raditya Dika"
                pic={DummyAuthor}
                author="Tiere Liye"
                circle
              />
            </View>
            <View style={styles.item}>
              <ListSmall
                name="Raditya Dika"
                pic={DummyAuthor}
                author="Tiere Liye"
                circle
              />
            </View>
            <View style={styles.item}>
              <ListSmall
                name="Raditya Dika"
                pic={DummyAuthor}
                author="Tiere Liye"
                circle
              />
            </View>
            <View style={styles.item}>
              <ListSmall
                name="Raditya Dika"
                pic={DummyAuthor}
                author="Tiere Liye"
                circle
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PopularAuthors;

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
