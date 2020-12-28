import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../../utils';

const Button = ({title, onPress, disable}) => {
  if (disable) {
    return (
      <View style={styles.disableBg}>
        <Text style={styles.disableText}>{title}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.button.primary.background,
    padding: 14,
    borderRadius: 10,
  },
  disableBg: {
    backgroundColor: colors.button.disable.background,
    padding: 14,
    borderRadius: 10,
  },
  text: {
    color: colors.button.primary.text,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  disableText: {
    color: colors.button.disable.text,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
});
