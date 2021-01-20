import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import PartsStack from './PartsStack';
import FavoritesStack from './FavoritesStack';
import TopPartsStack from './TopPartsStack';
import SeachStack from './SeachStack';
import AcountStack from './AcountStack';
import { Colors } from "@auteco/theme";


const Tab = createBottomTabNavigator();

const Navigations = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="parts"
        tabBarOptions={{
          inactiveTintColor: '#646464',
          activeTintColor: Colors.PRIMARY,
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
        <Tab.Screen
          name="parts"
          component={PartsStack}
          options={{ title: 'Partes' }}
        />
        <Tab.Screen
          name="favorites"
          component={FavoritesStack}
          options={{ title: 'Favoritos' }}
        />
        <Tab.Screen
          name="topparts"
          component={TopPartsStack}
          options={{ title: 'Promociones' }}
        />
        <Tab.Screen
          name="seachStack"
          component={SeachStack}
          options={{ title: 'Búsqueda' }}
        />
        <Tab.Screen
          name="acount"
          component={AcountStack}
          options={{ title: 'Mi cuenta' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;

function screenOptions(route, color) {
  let iconName;
  switch (route.name) {
    case 'parts':
      iconName = 'compass-outline';
      break;
    case 'favorites':
      iconName = 'heart-outline';
      break;
    case 'topparts':
      iconName = 'star-three-points-outline';
      break;
    case 'seachStack':
      iconName = 'magnify-plus-outline';
      break;
    case 'acount':
      iconName = 'home-outline';
      break;
    default:
      break;
  }

  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}
