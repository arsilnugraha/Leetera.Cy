import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {DummyBook3} from '../../assets';
import {ListSmall, Header} from '../../components';
import {colors} from '../../utils';

const Collection = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title="Collection" />
        <View style={styles.content}>
          <View style={styles.wrapperSection}>
            <View style={styles.item}>
              <ListSmall
                title="Now You're Gonna Believe Us"
                pic={DummyBook3}
                author="Tiere Liye"
                rating={5}
              />
            </View>
            <View style={styles.item}>
              <ListSmall
                title="Now You're Gonna Believe Us"
                pic={DummyBook3}
                author="Tiere Liye"
                rating={5}
              />
            </View>
            <View style={styles.item}>
              <ListSmall
                title="Now You're Gonna Believe Us"
                pic={DummyBook3}
                author="Tiere Liye"
                rating={5}
              />
            </View>
            <View style={styles.item}>
              <ListSmall
                title="Now You're Gonna Believe Us"
                pic={DummyBook3}
                author="Tiere Liye"
                rating={5}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Collection;

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
    justifyContent: 'space-between'
  },
  item: {
    width: '50%', // is 50% of container width
  },
});
