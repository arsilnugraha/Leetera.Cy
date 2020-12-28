import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';
import {IconUp} from '../../../assets';

const ListReview = ({pic, review, page}) => {
  return (
    <View style={styles.container(page)}>
      <View>
        <Image source={pic} style={styles.pic(page)} />
      </View>
      <View style={styles.content}>
        <Text style={styles.review(page)}>{review}</Text>
        <View style={styles.side}>
          {/* <Text style={styles.link}>See Full</Text> */}
          <IconUp />
        </View>
      </View>
    </View>
  );
};

export default ListReview;

const styles = StyleSheet.create({
  container: (page) => ({
    flexDirection: 'row',
    borderWidth: 1,
    padding: 5,
    borderColor: colors.border,
    marginRight: page ? 0 : 16,
  }),
  pic: (page) => ({
    width: page ? 70 : 50,
    height: page ? 112 : 80,
  }),
  content: {
    marginLeft: 5,
    flexDirection: 'row',
  },
  review: (page) => ({
    fontFamily: 'Poppins-Regular',
    fontSize: page ? 10 : 8,
    maxWidth: page ? 180 : 100,
    maxHeight: page ? 99 : 61,
  }),
  link: {
    fontFamily: 'Poppins-Regular',
    fontSize: 8,
    color: colors.primary,
    marginLeft: 86,
  },
  side: {
    marginLeft: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
