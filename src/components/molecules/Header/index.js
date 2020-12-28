import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconBack} from '../../../assets';
import {colors} from '../../../utils';

const Header = ({title, childPage, onPress}) => {
  return (
    <View style={styles.container(childPage)}>
      {childPage && <IconBack onPress={onPress}/>}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: (childPage) => ({
    flexDirection: 'row',
    justifyContent: childPage ? 'space-between' : 'center',
    height: 100,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    alignItems: 'center',
    paddingTop: 60,
    paddingLeft: 22,
    paddingRight: 20,
    paddingBottom: 17,
  }),
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: colors.white,
  },
});
