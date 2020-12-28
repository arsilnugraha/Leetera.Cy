import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconFilter, IconSearch} from '../../../assets';
import {colors} from '../../../utils';
import {Input} from '../../atoms';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Input placeholder="Search Your Book" paddingLeft={44} />
        <View style={styles.search}>
          <IconSearch/>
        </View>
      </View>
      <View style={styles.filter}>
        <IconFilter />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 16,
  },
  search: {
    position: 'absolute',
    left: 16,
    top: 12,
  },
  form: {
    flex: 1,
  },
  filter: {
    width: 48,
    height: 48,
    borderRadius: 10,
    backgroundColor: colors.white,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
