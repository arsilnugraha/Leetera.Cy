import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {DummyBook2, IconNext} from '../../assets';
import {Header, List} from '../../components';
import { colors } from '../../utils';

const Notifications = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          title="Notification"
          childPage
          onPress={() => navigation.goBack()}
        />
        <View style={styles.content}>
          <View style={styles.wrapperSection}>
            <List
              page="Notification"
              pic={DummyBook2}
              title="Robbo : Now You're Gonna Believe Us"
              desc="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use"
              icon={<IconNext />}
            />
            <List
              page="Notification"
              pic={DummyBook2}
              title="Robbo : Now You're Gonna Believe Us"
              desc="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use"
              icon={<IconNext />}
            />
            <List
              page="Notification"
              pic={DummyBook2}
              title="Robbo : Now You're Gonna Believe Us"
              desc="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use"
              icon={<IconNext />}
            />
            <List
              page="Notification"
              pic={DummyBook2}
              title="Robbo : Now You're Gonna Believe Us"
              desc="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use"
              icon={<IconNext />}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 16,
    marginBottom: 90,
  },
  wrapperSection: {
    marginTop: 20,
  },
});
