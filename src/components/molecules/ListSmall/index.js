import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {IconStar} from '../../../assets';
import {colors} from '../../../utils';

const ListSmall = ({pic, title, author, circle, onPress, rating}) => {
  const [starRating, setStarRating] = useState([]);
  useEffect(() => {
    getStarRating(rating);
  }, []);;

  const getStarRating = (rating) => {
    const starRating = [];
    for (let i = 0; i < rating; i++) {
      starRating.push(<IconStar />);
    }
    setStarRating(starRating);
  };
  return (
    <TouchableOpacity style={styles.container(circle)} onPress={onPress}>
      <Image source={pic} style={styles.image(circle)} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.ratingStar}>
        {starRating}
        <Text style={styles.rating}>{rating.toFixed(1)}</Text>
      </View>
      <Text style={styles.author}>{author}</Text>
    </TouchableOpacity>
  );
};

export default ListSmall;

const styles = StyleSheet.create({
  container: (circle) => (
    {
      marginHorizontal: 16,
      marginBottom: 16,
      alignItems: circle ? 'center' : 'flex-start'
    }
  ) ,
  image: (circle) => (
    {
      width: circle ? 72 : 120,
      height: circle ? 72 : 192,
      borderRadius: circle ? 72/2 : 0
    }
  ),
  ratingStar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: 56,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: colors.secondary,
  },
  author: {
    fontSize: 12,
    color: colors.text.tertiary,
  },
  rating: {
    marginLeft: 5,
    fontSize: 8,
    fontFamily: 'Poppins-Regular'
  },
});
