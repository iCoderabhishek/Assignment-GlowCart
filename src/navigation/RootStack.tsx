import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from '../screens/onboarding';
import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';
import ProductDetailsScreen from '../screens/product-details';
import ProfileScreen from '../screens/profile';
import WishlistScreen from '../screens/wishlist';
import OffersScreen from '../screens/offers';
import Tabs from './Tabs'; // your bottom tabs

export type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Register: undefined;
  ProductDetails: { id?: string };
  Profile: undefined;
  HomeTabs: undefined;
  Wishlist: undefined;
  Offers: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="HomeTabs" component={Tabs} />
      <Stack.Screen name="Wishlist" component={WishlistScreen} />
      <Stack.Screen name="Offers" component={OffersScreen} />

      <Stack.Screen name="HomeTabs" component={Tabs} />
    </Stack.Navigator>
  );
}
