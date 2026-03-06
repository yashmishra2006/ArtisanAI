import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES, SPACING, RADIUS } from '../../constants/theme';

export default function MarketplaceScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchSection}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color={COLORS.textMuted} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search crafts..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor={COLORS.textMuted}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="options" size={24} color={COLORS.textMain} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.breadcrumbs}>
            <Text style={styles.breadcrumb}>Home</Text>
            <Ionicons name="chevron-forward" size={16} color={COLORS.textMuted} />
            <Text style={[styles.breadcrumb, styles.breadcrumbActive]}>Marketplace</Text>
          </View>
          <Text style={styles.title}>Shop Handmade India</Text>
          <Text style={styles.subtitle}>
            Discover authentic, handcrafted luxury from master artisans across India.
          </Text>
        </View>

        {/* Filter Tags */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filterTags}
          contentContainerStyle={styles.filterTagsContent}
        >
          {['All', 'Pottery', 'Textiles', 'Jewelry', 'Paintings', 'Woodwork'].map((tag, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.filterTag, index === 0 && styles.filterTagActive]}
            >
              <Text style={[styles.filterTagText, index === 0 && styles.filterTagTextActive]}>
                {tag}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Products Grid */}
        <View style={styles.productsSection}>
          <Text style={styles.productsCount}>142 Products</Text>
          <View style={styles.productGrid}>
            {Array(12).fill(0).map((_, index) => (
              <TouchableOpacity
                key={index}
                style={styles.productCard}
                onPress={() => navigation.navigate('ProductDetail', { productId: index + 1 })}
              >
                <View style={styles.productImage}>
                  <Ionicons name="image" size={60} color={COLORS.borderColor} />
                  <TouchableOpacity style={styles.favoriteButton}>
                    <Ionicons name="heart-outline" size={20} color={COLORS.textMain} />
                  </TouchableOpacity>
                </View>
                <View style={styles.productInfo}>
                  <Text style={styles.productName} numberOfLines={2}>
                    Traditional Warli Art Hand-Painted Pottery Vase
                  </Text>
                  <View style={styles.artistInfo}>
                    <View style={styles.artistAvatar}>
                      <Text style={styles.artistInitial}>P</Text>
                    </View>
                    <Text style={styles.artistName}>Priya Sharma</Text>
                  </View>
                  <View style={styles.productFooter}>
                    <Text style={styles.productPrice}>₹2,499</Text>
                    <View style={styles.ratingContainer}>
                      <Ionicons name="star" size={14} color={COLORS.warning} />
                      <Text style={styles.ratingText}>4.8</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundLight,
  },
  searchSection: {
    flexDirection: 'row',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    gap: SPACING.sm,
    backgroundColor: COLORS.surfaceLight,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderColor,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    backgroundColor: COLORS.backgroundLight,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: RADIUS.full,
  },
  searchInput: {
    flex: 1,
    fontSize: SIZES.sm,
    color: COLORS.textMain,
  },
  filterButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundLight,
    borderRadius: RADIUS.md,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: SPACING.lg,
  },
  breadcrumbs: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
    marginBottom: SPACING.md,
  },
  breadcrumb: {
    fontSize: SIZES.sm,
    color: COLORS.textMuted,
  },
  breadcrumbActive: {
    color: COLORS.textMain,
    fontWeight: '600',
  },
  title: {
    fontSize: SIZES.xxxl,
    fontWeight: 'bold',
    color: COLORS.textMain,
    marginBottom: SPACING.xs,
  },
  subtitle: {
    fontSize: SIZES.base,
    color: COLORS.textMuted,
    fontStyle: 'italic',
    lineHeight: SIZES.base * 1.5,
  },
  filterTags: {
    paddingVertical: SPACING.sm,
  },
  filterTagsContent: {
    paddingHorizontal: SPACING.md,
    gap: SPACING.sm,
  },
  filterTag: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
    borderRadius: RADIUS.full,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    backgroundColor: COLORS.surfaceLight,
  },
  filterTagActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  filterTagText: {
    fontSize: SIZES.sm,
    fontWeight: '600',
    color: COLORS.textMain,
  },
  filterTagTextActive: {
    color: COLORS.white,
  },
  productsSection: {
    padding: SPACING.md,
  },
  productsCount: {
    fontSize: SIZES.sm,
    color: COLORS.textMuted,
    marginBottom: SPACING.md,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.md,
  },
  productCard: {
    width: '47%',
    backgroundColor: COLORS.surfaceLight,
    borderRadius: RADIUS.md,
    overflow: 'hidden',
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 200,
    backgroundColor: COLORS.backgroundLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteButton: {
    position: 'absolute',
    top: SPACING.sm,
    right: SPACING.sm,
    width: 32,
    height: 32,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productInfo: {
    padding: SPACING.sm,
  },
  productName: {
    fontSize: SIZES.sm,
    fontWeight: '600',
    color: COLORS.textMain,
    marginBottom: SPACING.xs,
    lineHeight: SIZES.sm * 1.3,
  },
  artistInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
    marginBottom: SPACING.xs,
  },
  artistAvatar: {
    width: 20,
    height: 20,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  artistInitial: {
    fontSize: SIZES.xs,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  artistName: {
    fontSize: SIZES.xs,
    color: COLORS.textMuted,
  },
  productFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productPrice: {
    fontSize: SIZES.base,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  ratingText: {
    fontSize: SIZES.xs,
    fontWeight: '600',
    color: COLORS.textMain,
  },
});
