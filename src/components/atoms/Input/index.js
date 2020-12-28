import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {IconEmail, IconLocation2, IconText, IconView} from '../../../assets';
import {colors} from '../../../utils';

const Input = ({
  placeholder,
  paddingLeft,
  secureTextEntry,
  value,
  text,
  location,
  email,
  textArea,
  onChangeText,
  disable,
  numberOfLines
}) => {
  return (
    <View>
      {!textArea && (
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          style={styles.textInput(paddingLeft)}
          editable={!disable}
          selectTextOnFocus={!disable}
        />
      )}
      {textArea && (
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          style={styles.textInput(paddingLeft, textArea)}
          numberOfLines={numberOfLines}
          multiline={true}
        />
      )}
      {secureTextEntry ? <IconView style={styles.icon} /> : null}
      {text && <IconText style={styles.icon} />}
      {email && <IconEmail style={styles.icon} />}
      {location && <IconLocation2 style={styles.icon} />}
      {textArea && <IconText style={styles.iconText} />}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  textInput: (paddingLeft, textArea) => ({
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingLeft: paddingLeft,
    paddingRight: 50,
    fontFamily: 'Poppins-Regular',
    backgroundColor: colors.white,
    textAlignVertical: textArea ? 'top' : 'center',
  }),
  icon: {position: 'absolute', right: 20, bottom: 18},
  iconText: {
    position: 'absolute',
    right: 20,
    top: 18,
  },
});
