import {
  Bell,
  ChevronRight,
  CreditCard as Edit,
  FileText,
  Globe,
  CircleHelp as HelpCircle,
  MapPin,
  MoveHorizontal as MoreHorizontal,
  Package,
  Phone,
  Shield,
} from 'lucide-react-native';

import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import logoutImg from '../assets/images/icons/logout.png';
import { styles } from '../styles/profile.styles';

export default function Profile() {
  const menuItems = [
    {
      icon: MapPin,
      title: 'Address',
      subtitle: 'Manage your saved address',
      hasChevron: true,
    },
    {
      icon: Package,
      title: 'Order History',
      subtitle: 'View your past orders',
      hasChevron: true,
    },
    {
      icon: Globe,
      title: 'Language',
      subtitle: '',
      hasChevron: true,
    },
    {
      icon: Bell,
      title: 'Notifications',
      subtitle: '',
      hasChevron: true,
    },
  ];

  const supportItems = [
    {
      icon: Phone,
      title: 'Contact Us',
      hasChevron: true,
    },
    {
      icon: HelpCircle,
      title: 'Get Help',
      hasChevron: true,
    },
    {
      icon: Shield,
      title: 'Privacy Policy',
      hasChevron: true,
    },
    {
      icon: FileText,
      title: 'Terms and Conditions',
      hasChevron: true,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity>
            <View style={styles.headerButton}>
              <MoreHorizontal size={24} color="#000" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Profile Info */}
        <View style={styles.profileSection}>
          <View style={styles.profileCard}>
            <Image
              source={{
                uri: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
              }}
              style={styles.profileImage}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>Olivia</Text>
              <Text style={styles.profileEmail}>Olivia@gmail.com</Text>
            </View>
            <TouchableOpacity>
              <Edit size={20} color="#666" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuCard}>
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            const isLast = index === menuItems.length - 1;
            return (
              <TouchableOpacity
                key={index}
                style={[styles.menuItem, !isLast && styles.menuItemBorder]}
              >
                <View style={styles.iconContainer}>
                  <IconComponent size={20} color="#666" />
                </View>
                <View style={styles.menuContent}>
                  <Text style={styles.menuTitle}>{item.title}</Text>
                  {item.subtitle && (
                    <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
                  )}
                </View>
                {item.hasChevron && <ChevronRight size={20} color="#666" />}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Support Items */}
        <View style={styles.menuCard}>
          {supportItems.map((item, index) => {
            const IconComponent = item.icon;
            const isLast = index === supportItems.length - 1;
            return (
              <TouchableOpacity
                key={index}
                style={[styles.menuItem, !isLast && styles.menuItemBorder]}
              >
                <View style={styles.iconContainer}>
                  <IconComponent size={20} color="#666" />
                </View>
                <View style={styles.menuContent}>
                  <Text style={styles.menuTitle}>{item.title}</Text>
                </View>
                {item.hasChevron && <ChevronRight size={20} color="#666" />}
              </TouchableOpacity>
            );
          })}

          {/* Log Out */}
          <TouchableOpacity style={styles.logoutItem}>
            <View style={styles.iconContainer}>
              <Image source={logoutImg} style={styles.logoutIcon} />
            </View>
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
