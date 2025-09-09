import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/index';
import ProfileScreen from '../screens/profile';
import OffersScreen from '../screens/offers';
import WishlistScreen from '../screens/wishlist';
import { Platform } from 'react-native';
import { HouseIcon } from 'lucide-react-native';

export type TabParamList = {
  Home: undefined;
  Profile: undefined;
  Offers: undefined;
  Wishlist: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#CC3D3D',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={() => {
          return {
            tabBarIcon: ({ focused, color, size }) => (
              <HouseIcon
                size={size}
                color={color}
                fill={focused ? color : 'transparent'}
              />
            ),
          };
        }}
      />

      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={() => {
          return {
            tabBarIcon: ({ focused, color, size }) => (
              <HouseIcon
                size={size}
                color={color}
                fill={focused ? color : 'transparent'}
              />
            ),
          };
        }}
      />

      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
