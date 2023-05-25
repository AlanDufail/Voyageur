import * as Font from 'expo-font';

export default useFonts = async () =>
  await Font.loadAsync({
    clashDisplay_bold: require('../../assets/font/ClashDisplay-Bold.otf'),
    clashDisplay_medium: require('../../assets/font/ClashDisplay-Medium.otf'),
    clashDisplay_regular: require('../../assets/font/ClashDisplay-Regular.otf'),

  });