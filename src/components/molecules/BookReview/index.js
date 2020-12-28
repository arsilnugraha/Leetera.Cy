import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IconSend, ILNullPhoto} from '../../../assets';
import { Fire } from '../../../config';
import {colors, showError, showSuccess} from '../../../utils';
import {Button, Input} from '../../atoms';

const BookReview = ({reviewer, avatar, uid, book_id}) => {
  const [review, setReview] = useState('');

  const Add = () => {
    const data = {
      review: review,
      uid: uid,
      book_id: book_id,
    };
    Fire.database()
      .ref('review/')
      .push(data)
      .then(() => {
        showSuccess('Review berhasil ditambahkan');
        setReview('');
      })
      .catch((err) => {
        showError(err.message);;
      });
  };
  return (
    <View>
      <View>
        <View style={styles.review}>
          <Text style={styles.title}>Review</Text>
          <Text style={styles.reviewer}>{reviewer} review</Text>
        </View>
        <View style={styles.formReview}>
          <Image source={avatar} style={styles.avatar} />
          <View style={styles.form}>
            <View style={styles.input}>
              <Input
                placeholder="Review Anda"
                value={review}
                onChangeText={(value) => setReview(value)}
                paddingLeft={13}
                textArea
                numberOfLines={8}
              />
            </View>
            <TouchableOpacity style={styles.icon} onPress={Add}>
              <IconSend style={styles.send} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BookReview;

const styles = StyleSheet.create({
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
  },
  review: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: colors.text.secondary,
  },
  reviewer: {
    fontSize: 8,
    fontFamily: 'Poppins-Regular',
    color: colors.text.tertiary,
    marginLeft: 16,
  },
  formReview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  form: {
    flex: 1,
    marginLeft: 9,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  input: {
    flex: 1,
    marginRight: 9,
  },

  icon: {width: 36, height: 40, justifyContent: 'center', alignItems: 'center'},
});
