import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {DummyBook2, IconCollectionActive} from '../../assets';
import {Header, List} from '../../components/';
import {colors} from '../../utils';

const History = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title="History" />
        <View style={styles.content}>
          <View style={styles.wrapperSection}>
            <List
              page="History"
              pic={DummyBook2}
              activity="Buku DIsimpan"
              title="Robbo : Now You're Gonna Believe Us"
              author="Andrew Robertson"
              date="12/10/2012"
              icon={<IconCollectionActive />}
            />
            <List
              page="History"
              pic={DummyBook2}
              activity="Buku DIsimpan"
              title="Robbo : Now You're Gonna Believe Us"
              author="Andrew Robertson"
              date="12/10/2012"
              icon={<IconCollectionActive />}
            />
            <List
              page="History"
              pic={DummyBook2}
              activity="Buku DIsimpan"
              title="Robbo : Now You're Gonna Believe Us"
              author="Andrew Robertson"
              date="12/10/2012"
              icon={<IconCollectionActive />}
            />
            <List
              page="History"
              pic={DummyBook2}
              activity="Buku DIsimpan"
              title="Robbo : Now You're Gonna Believe Us"
              author="Andrew Robertson"
              date="12/10/2012"
              icon={<IconCollectionActive />}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 16,
    marginBottom: 90,
  },
  wrapperSection: {
    marginTop: 20,
  },
});
