const mainColors = {
  blue1: '#03A9F4',
  blue2: '#0072FF',
  blue3: '#047AF8',
  blue4: '#7DC9E7',
  purple: '#4C4177',
  dark1: '#242330',
  grey: '#707070',
  grey2: '#95989A',
  grey3: '#70707050',
  grey4: '#EDEEF0',
  grey5: '#B1B7C2',
  red1: '#CC0000',
  green: '#007E33',
  black: '#252525'
};

export const colors = {
  primary: mainColors.blue1,
  secondary: mainColors.purple,
  white: 'white',
  black: 'black',
  text: {
    primary: mainColors.blue1,
    secondary: mainColors.purple,
    tertiary: mainColors.grey,
    quaternary: mainColors.blue2,
    desc: mainColors.grey2,
    auth: mainColors.blue4,
  },
  item: {
    primary: mainColors.dark1,
    secondary: mainColors.purple,
  },
  button: {
    primary: {
      background: mainColors.blue1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: mainColors.dark1,
    },
    disable: {
      background: mainColors.grey4,
      text: mainColors.grey5,
    }
  },
  mode: {
    light: {
      background: 'white',
      text: mainColors.grey
    },
    dark: {
      background: mainColors.black,
      text: 'white'
    },
  },
  link: mainColors.blue3,
  link2: mainColors.purple,
  border: mainColors.blue1,
  line: mainColors.grey3,
  error: mainColors.red1,
  success: mainColors.green
};
