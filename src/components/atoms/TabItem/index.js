import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  IconCollection,
  IconCollectionActive,
  IconHistory,
  IconHistoryActive,
  IconHome,
  IconHomeActive,
  IconOthers,
  IconOthersActive,
} from '../../../assets';
import {colors} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <IconHomeActive /> : <IconHome />;
    }
    if (title === 'History') {
      return active ? <IconHistoryActive /> : <IconHistory />;
    }
    if (title === 'Collection') {
      return active ? <IconCollectionActive /> : <IconCollection />;
    }
    if (title === 'Download') {
      return active ? <IconOthersActive /> : <IconOthers />;
    }
    return <IconHome />;
  };
  return (
    <TouchableOpacity
      style={styles.container(active)}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: (active) => ({
    width: 80,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: active ? colors.button.primary.background : 'white',
    borderRadius: 10,
  }),
});
