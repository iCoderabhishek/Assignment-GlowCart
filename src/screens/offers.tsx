import { Gift } from 'lucide-react-native';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/offers.styles';

const Offers = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Offers</Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.emptyStateContainer}>
          <View style={styles.emptyStateIcon}>
            <Gift size={32} color="#B84953" />
          </View>
          <Text style={styles.emptyStateTitle}>Oops! No Offers Available</Text>
          <Text style={styles.emptyStateSubtitle}>
            We're working on bringing you amazing deals and offers. Check back
            soon for exciting discounts!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Offers;
