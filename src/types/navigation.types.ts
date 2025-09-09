import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {
  type CompositeNavigationProp
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type TabsParamList = {
  index: undefined;
  explore: undefined;
  login: undefined;
};

export type StackParamList = {
  onboarding: undefined;
  login: undefined;
  register: undefined;
  profile: undefined;
  "product-details": {id: number};
    "(tabs)": { screen?: "index" | "login" };

};

export type OnboardingNavProp = CompositeNavigationProp<
  NativeStackNavigationProp<StackParamList, "onboarding">,
  BottomTabNavigationProp<TabsParamList>
>;