import { ArrowLeft, Star } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useProducts } from '../hooks/useProducts';
import { OnboardingNavProp, StackParamList } from '../types/navigation.types';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import cartImg from '../assets/images/icons/cart.png';
import shareImg from '../assets/images/icons/share.png';
import { styles } from '../styles/product-details.styles';

type ProductDetailsRouteProp = RouteProp<StackParamList, 'product-details'>;

export default function ProductDetails() {
  const [isFavorite, setIsFavorite] = useState(false);

  const route = useRoute<ProductDetailsRouteProp>();
  const { id } = route.params;

  const { product, loading, error } = useProducts(id);

  const renderStars = (rating: number, size: number = 20) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        // Full black star
        stars.push(<Star key={i} size={size} color="#000" fill="#000" />);
      } else if (i === fullStars && hasHalfStar) {
        // Half black star
        stars.push(
          <View
            key={i}
            style={[styles.starContainer, { width: size, height: size }]}
          >
            {/* Outlined star */}
            <Star size={size} color="#000" />
            {/* Half filled star */}
            <View
              style={[
                styles.halfStarContainer,
                { width: size / 2, height: size },
              ]}
            >
              <Star size={size} color="#000" fill="#000" />
            </View>
          </View>,
        );
      } else {
        // Empty outlined star
        stars.push(<Star key={i} size={size} color="#000" />);
      }
    }

    return stars;
  };

  const renderReviewItem = ({
    item: review,
    index,
  }: {
    item: any;
    index: number;
  }) => (
    <View style={styles.reviewItem}>
      {/* Reviewer Info */}
      <View style={styles.reviewHeader}>
        {/* No avatar in API, so we can use initials or a placeholder */}
        <View style={styles.reviewerAvatar}>
          <Text style={styles.reviewerInitial}>
            {review.reviewerName.charAt(0)}
          </Text>
        </View>

        <View style={styles.reviewerInfo}>
          <Text style={styles.reviewerName}>{review.reviewerName}</Text>
          <Text style={styles.reviewerEmail}>{review.reviewerEmail}</Text>
        </View>
        <View style={styles.reviewStars}>{renderStars(review.rating, 14)}</View>
      </View>

      {/* Review Comment */}
      <Text style={styles.reviewComment}>{review.comment}</Text>
    </View>
  );

  const navigation = useNavigation<OnboardingNavProp>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {/* Header */}

        {/* Product Image */}
        <View style={styles.productImageSection}>
          <View style={styles.productImageContainer}>
            {/* Product Image */}
            <Image
              source={{ uri: product?.thumbnail || product?.images?.[0] }}
              style={styles.productImage}
              resizeMode="cover"
            />

            {/* Icons inside the image */}
            <View style={styles.headerIcons}>
              <TouchableOpacity style={styles.iconButton}>
                <ArrowLeft size={25} color="#000" />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => navigation.navigate('profile')}
              >
                <Image source={cartImg as any} style={styles.cartIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* View Similar Button */}
        <View style={styles.viewSimilarSection}>
          <TouchableOpacity style={styles.viewSimilarButton}>
            <Text style={styles.viewSimilarText}>View Similar</Text>
          </TouchableOpacity>
          <Image source={shareImg as any} style={styles.shareIcon} />
        </View>

        {/* Product Info */}
        <View style={styles.productInfoSection}>
          <Text style={styles.productTitle}>{product?.title}</Text>

          <Text style={styles.productDescription}>{product?.description}</Text>

          {/* Rating */}
          <View style={styles.ratingContainer}>
            <View style={styles.starsContainer}>
              {product?.rating !== undefined && renderStars(product.rating)}
            </View>
            <Text style={styles.ratingText}>{product?.rating}/5</Text>
          </View>

          <View style={styles.divider} />
          {/* Sold By */}
          <Text style={styles.soldByText}>
            Sold by : <Text style={styles.brandText}>{product?.brand}</Text>
          </Text>

          {/* Price + Add to Bag */}
          <View style={styles.priceSection}>
            {/* Price Section */}
            <View style={styles.priceContainer}>
              <Text style={styles.price}>{product?.price}</Text>
              <Text style={styles.discountPrice}>
                {product?.discountPercentage}
              </Text>
            </View>

            {/* Add to Bag Button */}
            <TouchableOpacity style={styles.addToBagButton}>
              <Text style={styles.addToBagText}>Add to Bag</Text>
            </TouchableOpacity>
          </View>

          {/* Highlights */}
          <View style={styles.highlightsSection}>
            <Text style={styles.highlightsTitle}>Highlights</Text>

            <View style={styles.highlightsContent}>
              {/* Left column (label + value stacked) */}
              <View style={styles.highlightsColumn}>
                <View style={styles.highlightItem}>
                  <Text style={styles.highlightLabel}>Width</Text>
                  <Text style={styles.highlightValue}>
                    {product?.dimensions.width}
                  </Text>
                </View>

                <View style={styles.highlightItem}>
                  <Text style={styles.highlightLabel}>Height</Text>
                  <Text style={styles.highlightValue}>
                    {product?.dimensions.height}
                  </Text>
                </View>
              </View>

              {/* Divider */}
              <View style={styles.highlightsDivider} />

              {/* Right column (label + value stacked) */}
              <View style={styles.highlightsColumn}>
                <View style={styles.highlightItem}>
                  <Text style={styles.highlightLabel}>Warranty</Text>
                  <Text style={styles.highlightValue}>
                    {product?.warrantyInformation}
                  </Text>
                </View>

                <View>
                  <Text style={styles.highlightLabel}>Shipping</Text>

                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Text style={styles.highlightValue}>
                      {product?.shippingInformation?.replace('Ships in ', '')}
                    </Text>
                  </ScrollView>
                </View>
              </View>
            </View>
          </View>

          {/* Ratings & Reviews */}
          <View style={styles.reviewsSection}>
            <Text style={styles.reviewsTitle}>Ratings & Reviews</Text>

            <FlatList
              data={product?.reviews || []}
              renderItem={renderReviewItem}
              keyExtractor={(item, index) => index.toString()}
              scrollEnabled={false}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
