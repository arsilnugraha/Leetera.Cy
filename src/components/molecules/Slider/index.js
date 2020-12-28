import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {ILSlider1} from '../../../assets';
import {Fire} from '../../../config';
import { showError } from '../../../utils';

const Slider = () => {
  const [sliders, setSliders] = useState([]);
  useEffect(() => {
    Fire.database()
      .ref('slider/')
      .once('value')
      .then((res) => {
        if  (res.val()) {
          const slider = []
          res.val().map(item => {
            slider.push(item.image)
          })
          return setSliders(slider)
        }
      })
      .catch((err) => {
        showError(err.message);
      });
  }, []);
  
  return (
    <View style={styles.container}>
      <SliderBox
      style={styles.slider}
        // images={slider}
        images={sliders}
        sliderBoxHeight={120}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    marginHorizontal: 4,
  },
  slider: {
    height: 120,
    width: 320,
    borderRadius: 10,
  },
});
