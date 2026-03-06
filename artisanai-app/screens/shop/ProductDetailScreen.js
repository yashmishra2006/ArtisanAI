import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES, SPACING, RADIUS } from '../../constants/theme';

const { width } = Dimensions.get('window');

export default function ProductDetailScreen({ navigation, route }) {
  const { productId } = route.params || { productId: 1 };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
          <Ionicons name="arrow-back" size={24} color={COLORS.textMain} />
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerButton}>
            <Ionicons name="heart-outline" size={24} color={COLORS.textMain} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Ionicons name="share-social-outline" size={24} color={COLORS.textMain} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Product Images Carousel */}
        <View style={styles.imageCarousel}>
          <View style={styles.imagePlaceholder}>
            <Ionicons name="image" size={100} color={COLORS.borderColor} />
          </View>
          <View style={styles.dotIndicator}>
            {[0, 1, 2].map((_, index) => (
              <View key={index} style={[styles.dot, index === 0 && styles.dotActive]} />
            ))}
          </View>
        </View>

        {/* Product Info */}
        <View style={styles.content}>
          {/* Title & Price */}
          <View style={styles.titleSection}>
            <Text style={styles.productName}>Traditional Warli Art Pottery Vase</Text>
            <Text style={styles.productPrice}>₹2,499</Text>
          </View>

          {/* Rating & Reviews */}
          <View style={styles.ratingSection}>
            <View style={styles.rating}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Ionicons key={star} name="star" size={16} color={COLORS.warning} />
              ))}
            </View>
            <Text style={styles.ratingText}>4.8 (124 reviews)</Text>
          </View>

          {/* Artisan Info */}
          <TouchableOpacity style={styles.artistCard}>
            <View style={styles.artistAvatar}>
              <Text style={styles.artistInitial}>P</Text>
            </View>
            <View style={styles.artistInfo}>
              <Text style={styles.artistLabel}>Crafted by</Text>
              <Text style={styles.artistName}>Priya Sharma</Text>
              <Text style={styles.artistLocation}>Mumbai, Maharashtra</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={COLORS.textMuted} />
          </TouchableOpacity>

          {/* Description */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About This Product</Text>
            <Text style={styles.description}>
              This beautiful pottery vase features traditional Warli art, hand-painted by master artisan Priya Sharma. Each piece is unique and tells a story of rural life through intricate tribal patterns.
              {'\n\n'}
              Made using traditional techniques passed down through generations, this vase is both a functional piece and a work of art.
            </Text>
          </View>

          {/* Specifications */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Specifications</Text>
            <View style={styles.specs}>
              {[
                { label: 'Material', value: 'Clay & Natural Colors' },
                { label: 'Dimensions', value: '12" H x 6" W' },
                { label: 'Weight', value: '850g' },
                { label: 'Origin', value: 'Maharashtra, India' },
              ].map((spec, index) => (
                <View key={index} style={styles.specRow}>
                  <Text style={styles.specLabel}>{spec.label}</Text>
                  <Text style={styles.specValue}>{spec.value}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Digital Provenance Badge */}
          <View style={styles.provenanceBadge}>
            <Ionicons name="shield-checkmark" size={24} color={COLORS.primary} />
            <View style={styles.provenanceInfo}>
              <Text style={styles.provenanceTitle}>Digital Provenance Certified</Text>
              <Text style={styles.provenanceDescription}>
                Authenticity guaranteed with blockchain certification
              </Text>
            </View>
          </View>

          {/* Reviews Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Customer Reviews</Text>
              <TouchableOpacity>
                <Text style={styles.seeAllLink}>See All</Text>
              </TouchableOpacity>
            </View>
            {[1, 2].map((_, index) => (
              <View key={index} style={styles.reviewCard}>
                <View style={styles.reviewHeader}>
                  <View style={styles.reviewerAvatar}>
                    <Text style={styles.reviewerInitial}>A</Text>
                  </View>
                  <View style={styles.reviewerInfo}>
                    <Text style={styles.reviewerName}>Anjali Patel</Text>
                    <View style={styles.reviewRating}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Ionicons key={star} name="star" size={12} color={COLORS.warning} />
                      ))}
                    </View>
                  </View>
                  <Text style={styles.reviewDate}>2 days ago</Text>
                </View>
                <Text style={styles.reviewText}>
                  Beautiful craftsmanship! The vase is even more stunning in person. Love supporting traditional artisans.
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Action Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.addToCartButton}>
          <Ionicons name="cart-outline" size={24} color={COLORS.white} />
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyNowButton}>
          <Text style={styles.buyNowText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundLight,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    backgroundColor: COLORS.surfaceLight,
  },
  headerButton: {
    padding: SPACING.xs,
  },
  headerRight: {
    flexDirection: 'row',
    gap: SPACING.sm,
  },
  scrollView: {
    flex: 1,
  },
  imageCarousel: {
    width: width,
    height: width,
    backgroundColor: COLORS.surfaceLight,
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundLight,
  },
  dotIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: SPACING.xs,
    position: 'absolute',
    bottom: SPACING.md,
    left: 0,
    right: 0,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.white,
    opacity: 0.5,
  },
  dotActive: {
    opacity: 1,
  },
  content: {
    padding: SPACING.lg,
  },
  titleSection: {
    marginBottom: SPACING.md,
  },
  productName: {
    fontSize: SIZES.xxl,
    fontWeight: 'bold',
    color: COLORS.textMain,
    marginBottom: SPACING.xs,
    lineHeight: SIZES.xxl * 1.2,
  },
  productPrice: {
    fontSize: SIZES.xxxl,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  ratingSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    marginBottom: SPACING.lg,
  },
  rating: {
    flexDirection: 'row',
    gap: 2,
  },
  ratingText: {
    fontSize: SIZES.sm,
    color: COLORS.textMuted,
  },
  artistCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.md,
    backgroundColor: COLORS.surfaceLight,
    borderRadius: RADIUS.md,
    marginBottom: SPACING.lg,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  artistAvatar: {
    width: 48,
    height: 48,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.sm,
  },
  artistInitial: {
    fontSize: SIZES.xl,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  artistInfo: {
    flex: 1,
  },
  artistLabel: {
    fontSize: SIZES.xs,
    color: COLORS.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  artistName: {
    fontSize: SIZES.base,
    fontWeight: '600',
    color: COLORS.textMain,
  },
  artistLocation: {
    fontSize: SIZES.sm,
    color: COLORS.textMuted,
  },
  section: {
    marginBottom: SPACING.lg,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  sectionTitle: {
    fontSize: SIZES.lg,
    fontWeight: 'bold',
    color: COLORS.textMain,
    marginBottom: SPACING.sm,
  },
  seeAllLink: {
    fontSize: SIZES.sm,
    color: COLORS.primary,
    fontWeight: '600',
  },
  description: {
    fontSize: SIZES.sm,
    color: COLORS.textMuted,
    lineHeight: SIZES.sm * 1.6,
  },
  specs: {
    backgroundColor: COLORS.surfaceLight,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
  },
  specRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SPACING.sm,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderColor,
  },
  specLabel: {
    fontSize: SIZES.sm,
    color: COLORS.textMuted,
  },
  specValue: {
    fontSize: SIZES.sm,
    fontWeight: '600',
    color: COLORS.textMain,
  },
  provenanceBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.md,
    backgroundColor: `${COLORS.primary}15`,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: `${COLORS.primary}30`,
    marginBottom: SPACING.lg,
  },
  provenanceInfo: {
    flex: 1,
    marginLeft: SPACING.sm,
  },
  provenanceTitle: {
    fontSize: SIZES.sm,
    fontWeight: '600',
    color: COLORS.primary,
  },
  provenanceDescription: {
    fontSize: SIZES.xs,
    color: COLORS.textMuted,
  },
  reviewCard: {
    backgroundColor: COLORS.surfaceLight,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    marginBottom: SPACING.sm,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },
  reviewerAvatar: {
    width: 32,
    height: 32,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.xs,
  },
  reviewerInitial: {
    fontSize: SIZES.sm,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  reviewerInfo: {
    flex: 1,
  },
  reviewerName: {
    fontSize: SIZES.sm,
    fontWeight: '600',
    color: COLORS.textMain,
  },
  reviewRating: {
    flexDirection: 'row',
    gap: 2,
    marginTop: 2,
  },
  reviewDate: {
    fontSize: SIZES.xs,
    color: COLORS.textMuted,
  },
  reviewText: {
    fontSize: SIZES.sm,
    color: COLORS.textMuted,
    lineHeight: SIZES.sm * 1.5,
  },
  bottomBar: {
    flexDirection: 'row',
    padding: SPACING.md,
    gap: SPACING.sm,
    backgroundColor: COLORS.surfaceLight,
    borderTopWidth: 1,
    borderTopColor: COLORS.borderColor,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  addToCartButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: SPACING.xs,
    paddingVertical: SPACING.md,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.primaryDark,
  },
  addToCartText: {
    fontSize: SIZES.base,
    fontWeight: '600',
    color: COLORS.white,
  },
  buyNowButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SPACING.md,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.primary,
  },
  buyNowText: {
    fontSize: SIZES.base,
    fontWeight: 'bold',
    color: COLORS.white,
  },
});
