import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {DummyBook3} from '../../assets';
import {Gap, Header, ListReview} from '../../components';

const MyReview = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          title="My Review"
          childPage
          onPress={() => navigation.goBack()}
        />
        <View style={styles.content}>
          <ListReview
            pic={DummyBook3}
            review="Buku yang bagus bagi seorang
            pesepakbola yang baru saja
            mengantarkan Liverpool  juara liga
            Inggris dan liga Champions 2019-
            2020. Robbo berperan besar dalam
            skuad tersebut. Sehingga dia
            menulis sebuah buku…"
            page
          />
          <Gap height={20} />
          <ListReview
            pic={DummyBook3}
            review="Buku yang bagus bagi seorang
            pesepakbola yang baru saja
            mengantarkan Liverpool  juara liga
            Inggris dan liga Champions 2019-
            2020. Robbo berperan besar dalam
            skuad tersebut. Sehingga dia
            menulis sebuah buku…."
            page
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default MyReview;

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
