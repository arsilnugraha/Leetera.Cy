import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  IconCollectionActive,
  IconNext,
  IconSuccess
} from '../../../assets';
import { colors } from '../../../utils';

const List = ({pic, activity, title, author, date, page, desc, icon}) => {
  return (
    <View style={styles.container}>
      <Image source={pic} style={styles.image(page)} />
      <View style={styles.log}>
        {page == 'History' && <Text style={styles.activity}>{activity}</Text>}
        <Text style={styles.title}>{title}</Text>
        {(page == 'History' || page == 'Download') && (
          <Text style={styles.author}>{author}</Text>
        )}
        {page == 'Download' && (
          <Text style={styles.status}>Download Complete</Text>
        )}
        {page == 'Notification' && <Text style={styles.desc}>{desc}</Text>}
      </View>

      {page == 'History' && (
        <View style={styles.info(page)}>
          <Text style={styles.date}>{date}</Text>
          <View style={styles.icon(page)}>
            {icon}
          </View>
        </View>
      )}

      {page == 'Notification' && (
        <View style={styles.info(page)}>
          <TouchableOpacity style={styles.linkWrapper}>
              <Text style={styles.link}>Lihat Detail </Text>
              {icon}
          </TouchableOpacity>
        </View>
      )}

      {page == 'Download' && (
        <View style={styles.info(page)}>
          <View style={styles.icon(page)}>
            {icon}
          </View>
        </View>
      )}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    borderWidth: 1,
    borderColor: colors.primary,
    marginBottom: 16,
    borderRadius: 10,
  },
  image: (page) => ({
    width: page == 'History' || page == 'Download' ? 50 : 100,
    height: page == 'History' || page == 'Download' ? 80 : 100,
  }),
  log: {
    marginLeft: 10,
  },
  activity: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: colors.text.tertiary,
    maxWidth: 210,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: colors.text.secondary,
    maxWidth: 210,
  },
  author: {
    fontFamily: 'Poppins-Regular',
    fontSize: 8,
    color: colors.text.tertiary,
    maxWidth: 210,
  },
  date: {
    fontFamily: 'Poppins-Regular',
    fontSize: 6,
    color: colors.text.tertiary,
    marginRight: 3,
  },
  icon: (page) => ({
    backgroundColor: colors.primary,
    width: page == 'Download' ? 42 : 30,
    height: page == 'Download' ? 42 : 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: page == 'Download' ? 42 / 2 : 10,
    borderBottomRightRadius: page == 'Download' ? 42 / 2 : 10,
    borderTopRightRadius: page == 'Download' ? 42 / 2 : 0,
    borderBottomLeftRadius: page == 'Download' ? 42 / 2 : 0,
  }),
  info: (page) => ({
    flexDirection: 'row',
    alignItems: 'flex-end',
    position: 'absolute',
    right: page == 'Download' ? 15 : 0,
    bottom: page == 'Download' ? 24 : 0,
  }),
  status: {
    fontFamily: 'Poppins-Regular',
    fontSize: 8,
    color: colors.text.status,
    maxWidth: 190,
    marginTop: 11,
  },
  desc: {
    fontFamily: 'Poppins-Regular',
    fontSize: 8,
    color: colors.text.status,
    maxWidth: 186,
    maxHeight: 51,
    paddingTop: 4,
  },
  link: {
    fontFamily: 'Poppins-Regular',
    fontSize: 8,
    color: colors.text.primary,
  },
  linkWrapper: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 13.6
  }
});
