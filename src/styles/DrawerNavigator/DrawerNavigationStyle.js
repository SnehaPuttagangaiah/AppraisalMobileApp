import {StatusBar} from 'react-native';
import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';

const drawerNavigatorStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 30,
    alignItems: 'center',
    backgroundColor: colors.colors.headerpurple,
    marginTop: -StatusBar.currentHeight,
  },
  drawerContentScroll: {
    marginTop: -StatusBar.currentHeight,
  },

  drawerContentScrollView: {
    paddingTop: 70,
  },

  drawerLabel: {
    fontSize: 14,
  },

  drawerHeaderText: {
    color: 'white',
    fontSize: 14,
    marginRight: 10,
  },
  textColor: {
    color: '#fff',
    marginTop: 20,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default drawerNavigatorStyle;
