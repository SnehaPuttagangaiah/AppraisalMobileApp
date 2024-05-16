import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';

const introStyles = StyleSheet.create({
  button: {
    backgroundColor: '#CA3A6C',
    borderRadius: 30,
    marginBottom: 80,
    marginTop: 40,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  childText: {
    color: colors.colors.greydarkTint,
    fontSize: 17,
    marginBottom: 50,
    paddingTop: 20,
    textAlign: 'center',
  },
  container: {
    backgroundColor: '#f4f4f7',
    flex: 1,
  },
  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#CA3A6C',
  },
  image: {
    height: 300,
    marginBottom: 10,
    resizeMode: 'contain',
    width: 300,
  },
  nextButtonContainer: {
    alignItems: 'center',
  },
  slide: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  swipperActiveDotStyle: {
    borderColor: '#000000',
    borderRadius: 9,
    borderWidth: 0.4,
    height: 13,
    margin: 3,
    width: 13,
  },
  swipperBulletColor: {
    backgroundColor: '#ffffff',
    borderColor: '#000000',
    borderRadius: 20,
    borderWidth: 2,
  },
  swipperDotStyle: {
    borderColor: '#000000',
    borderRadius: 9,
    borderWidth: 0.4,
    height: 13,
    margin: 3,
    width: 13,
  },
});

export default introStyles;
