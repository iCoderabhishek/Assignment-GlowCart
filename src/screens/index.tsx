import { Bell, Search, ShoppingBag } from 'lucide-react-native';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Product, useProducts } from '../hooks/useProducts';
import { OnboardingNavProp } from '../types/navigation.types';
import { useNavigation } from '@react-navigation/native';
import downArrowImg from '../assets/images/icons/arrow_drop_down.png';
import heartImg from '../assets/images/icons/heart.png';
import { styles } from '../styles/index.styles';

export default function Index() {
  const navigation = useNavigation<OnboardingNavProp>();
  const { products, loading, error, refetch } = useProducts();

  if (loading)
    return <ActivityIndicator size="large" style={styles.loadingContainer} />;
  if (error) return <Text>Error loading products: {error}</Text>;

  const renderItem = ({ item }: { item: Product }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('product-details', { id: item.id })}
      style={styles.productItem}
    >
      <View style={styles.productContainer}>
        <View style={styles.productImageContainer}>
          <Image
            source={{ uri: item.thumbnail }}
            style={styles.productImage}
            resizeMode="cover"
          />
        </View>

        <View style={styles.productContent}>
          <Text style={styles.productTitle} numberOfLines={1}>
            {item.title}
          </Text>

          <View style={styles.productPriceRow}>
            <Text style={styles.productPrice}>${item.price}</Text>
            <TouchableOpacity>
              <Image source={heartImg as any} style={styles.heartIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.appHeaderRow}>
          <Text style={styles.appTitle}>Viorra</Text>
          <View style={styles.headerIconsContainer}>
            <TouchableOpacity>
              <Bell size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity>
              <ShoppingBag size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search for all products"
            placeholderTextColor="#4B4B4B"
            style={styles.searchInput}
          />
          <Search size={20} color="#999" style={styles.searchIcon} />
        </View>
      </View>

      <View style={styles.mainContent}>
        <FlatList
          data={products}
          keyExtractor={(item: Product) => item.id.toString()}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={styles.flatListColumn}
          contentContainerStyle={styles.flatListContent}
          refreshing={loading}
          onRefresh={refetch}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View style={styles.listHeader}>
              <View style={styles.listHeaderRow}>
                <View>
                  <Text style={styles.sectionTitle}>Best Products</Text>
                  <Text style={styles.productCount}>114 products</Text>
                </View>
                <TouchableOpacity style={styles.filterButton}>
                  <Text style={styles.filterText}>Apply Filter</Text>
                  <Image
                    source={downArrowImg as any}
                    style={styles.filterIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}
