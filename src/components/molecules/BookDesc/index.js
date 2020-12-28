import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View, WebView} from 'react-native';
import {IconStar} from '../../../assets';
import {colors} from '../../../utils';
import {Gap} from '../../atoms';

const BookDesc = ({
  title,
  rating,
  avatar,
  author,
  synopsis,
  isbn,
  pubYear,
  supplyStore,
}) => {
  const [starRating, setStarRating] = useState([]);
  useEffect(() => {
    getStarRating(rating);
  }, []);

  const getStarRating = (rating) => {
    const starRating = [];
    for (let i = 0; i < rating; i++) {
      starRating.push(<IconStar key={i} />);
    }
    setStarRating(starRating);
  };

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Gap height={4} />
      <View style={styles.star}>
        {starRating}
        <Text style={styles.rating}>{rating.toFixed(1)}</Text>
      </View>
      <Gap height={12.2} />
      <View style={styles.profileAuthor}>
        <Image source={avatar} style={styles.avatar} />
        <Text style={styles.author}>{author}</Text>
      </View>
      <Gap height={8} />
      <View style={styles.line} />
      <Gap height={3} />
      <Text style={styles.key}>Sinopsis</Text>
      <Gap height={4} />
      <Text style={styles.synopsis}>{synopsis}</Text>
      <Gap height={10} />
      <View style={styles.about}>
        <View style={styles.item}>
          <Text style={styles.key}>ISBN</Text>
          <Text style={styles.desc}>{isbn}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.key}>Tahun Terbit</Text>
          <Text style={styles.desc}>{pubYear}</Text>
        </View>
        <View style={styles.item}>
          <Gap height={10} />
          <Text style={styles.key}>Dapatkan di :</Text>
          <Text style={styles.supplyStore}>{supplyStore}</Text>
        </View>
      </View>
    </View>
  );
};

export default BookDesc;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: colors.text.secondary,
  },
  star: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 20,
    height: 10.8,
  },
  rating: {
    marginLeft: 5,
    marginTop: 3,
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
  },
  profileAuthor: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
  },
  author: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.primary,
    marginLeft: 11,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
  },
  key: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: colors.secondary,
  },
  desc: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: colors.text.desc,
  },
  synopsis: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: colors.text.desc,
  },
  about: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  item: {
    width: '50%',
  },
  supplyStore: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: colors.text.primary,
  },
});
