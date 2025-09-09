import { Heart } from 'lucide-react-native';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/wishlist.styles';

const Wishlist = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Wishlist</Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.emptyStateContainer}>
          <View style={styles.emptyStateIcon}>
            <Heart size={32} color="#B84953" />
          </View>
          <Text style={styles.emptyStateTitle}>Your Wishlist is Empty</Text>
          <Text style={styles.emptyStateSubtitle}>
            All your wishlist items will appear here. Start adding products you
            love to see them later!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Wishlist;
