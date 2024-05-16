import * as React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import drawerNavigatorStyle from '../styles/DrawerNavigator/DrawerNavigationStyle';
import {colors} from '../themes/colors';
import {View, Text} from 'react-native';
import {PreviousAppraisal} from '../screens/PreviousAppraisal/PreviousAppraisal';

const Drawer = createDrawerNavigator();

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView
      {...props}
      style={drawerNavigatorStyle.drawerContentScroll}>
      <View style={drawerNavigatorStyle.container}>
        <View style={drawerNavigatorStyle.drawerContentScrollView}>
          <Text
            style={[
              drawerNavigatorStyle.textColor,
              drawerNavigatorStyle.boldText,
            ]}>
            Appraisal
          </Text>
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: colors.colors.headerpurple},
        headerTintColor: colors.colors.contrast,
        drawerStyle: {
          paddingTop: 10,
        },
      }}
      initialRouteName="PreviousAppraisal"
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Appraisal"
        component={PreviousAppraisal}
        options={{
          drawerLabel: () => (
            <Text style={drawerNavigatorStyle.drawerLabel}>
              Previous Appraisal
            </Text>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
