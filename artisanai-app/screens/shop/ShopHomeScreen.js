import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES, SPACING, RADIUS } from '../../constants/theme';

export default function ShopHomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.surfaceLight} />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Ionicons name="flower" size={28} color={COLORS.primary} />
          <Text style={styles.headerTitle}>ArtisanAI</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="search" size={22} color={COLORS.textMain} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="heart-outline" size={22} color={COLORS.textMain} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="cart-outline" size={22} color={COLORS.textMain} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Hero Banner */}
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Discover Authentic{'\n'}Indian Crafts</Text>
          <Text style={styles.heroSubtitle}>
            Handmade with love by master artisans
          </Text>
          <TouchableOpacity
            style={styles.heroButton}
            onPress={() => navigation.navigate('Marketplace')}
          >
            <Text style={styles.heroButtonText}>Explore Collection</Text>
            <Ionicons name="arrow-forward" size={20} color={COLORS.white} />
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Shop by Category</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
            {[
              { name: 'Pottery', icon: 'basket' },
              { name: 'Textiles', icon: 'shirt' },
              { name: 'Jewelry', icon: 'diamond' },
              { name: 'Paintings', icon: 'color-palette' },
              { name: 'Woodwork', icon: 'hammer' },
            ].map((category, index) => (
              <TouchableOpacity key={index} style={styles.categoryCard}>
                <View style={styles.categoryIcon}>
                  <Ionicons name={category.icon} size={32} color={COLORS.primary} />
                </View>
                <Text style={styles.categoryName}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Featured Products */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Products</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Marketplace')}>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.productGrid}>
            {Array(4).fill(0).map((_, index) => (
              <TouchableOpacity
                key={index}
                style={styles.productCard}
                onPress={() => navigation.navigate('ProductDetail', { productId: index + 1 })}
              >
                <View style={styles.productImage}>
                  <Ionicons name="image" size={48} color={COLORS.borderColor} />
                </View>
                <Text style={styles.productName}>Handcrafted Pottery Vase</Text>
                <Text style={styles.productArtisan}>By Priya Sharma</Text>
                <Text style={styles.productPrice}>₹2,499</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* CTA Banner */}
        <View style={styles.ctaBanner}>
          <Text style={styles.ctaTitle}>Are you an artisan?</Text>
          <Text style={styles.ctaDescription}>
            Join our platform and reach customers worldwide
          </Text>
          <TouchableOpacity
            style={styles.ctaButton}
            onPress={() => navigation.navigate('Auth')}
          >
            <Text style={styles.ctaButtonText}>Become a Seller</Text>
          </TouchableOpacity>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
    backgroundColor: COLORS.surfaceLight,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderColor,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  headerTitle: {
    fontSize: SIZES.xl,
    fontWeight: 'bold',
    color: COLORS.textMain,
  },
  headerRight: {
    flexDirection: 'row',
    gap: SPACING.sm,
  },
  iconButton: {
    padding: SPACING.xs,
  },
  scrollView: {
    flex: 1,
  },
  hero: {
    backgroundColor: COLORS.primary,
    padding: SPACING.xl,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: SIZES.xxxl,
    fontWeight: 'bold',
    color: COLORS.white,
    textAlign: 'center',
    marginBottom: SPACING.sm,
    lineHeight: SIZES.xxxl * 1.2,
  },
  heroSubtitle: {
    fontSize: SIZES.base,
    color: COLORS.white,
    opacity: 0.9,
    marginBottom: SPACING.lg,
  },
  heroButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
    backgroundColor: COLORS.white,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
    borderRadius: RADIUS.full,
  },
  heroButtonText: {
    fontSize: SIZES.base,
    fontWeight: '600',
    color: COLORS.primary,
  },
  section: {
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.md,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  sectionTitle: {
    fontSize: SIZES.xxl,
    fontWeight: 'bold',
    color: COLORS.textMain,
  },
  seeAll: {
    fontSize: SIZES.sm,
    color: COLORS.primary,
    fontWeight: '600',
  },
  categories: {
    marginTop: SPACING.sm,
  },
  categoryCard: {
    alignItems: 'center',
    marginRight: SPACING.md,
    width: 100,
  },
  categoryIcon: {
    width: 80,
    height: 80,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.surfaceLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.xs,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryName: {
    fontSize: SIZES.sm,
    fontWeight: '600',
    color: COLORS.textMain,
    textAlign: 'center',
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
    height: 180,
    backgroundColor: COLORS.backgroundLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productName: {
    fontSize: SIZES.sm,
    fontWeight: '600',
    color: COLORS.textMain,
    padding: SPACING.sm,
    paddingBottom: 0,
  },
  productArtisan: {
    fontSize: SIZES.xs,
    color: COLORS.textMuted,
    paddingHorizontal: SPACING.sm,
    paddingTop: SPACING.xs,
  },
  productPrice: {
    fontSize: SIZES.base,
    fontWeight: 'bold',
    color: COLORS.primary,
    padding: SPACING.sm,
    paddingTop: SPACING.xs,
  },
  ctaBanner: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.xl,
    marginHorizontal: SPACING.md,
    marginBottom: SPACING.lg,
    borderRadius: RADIUS.lg,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: SIZES.xxl,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: SPACING.xs,
  },
  ctaDescription: {
    fontSize: SIZES.sm,
    color: COLORS.white,
    opacity: 0.9,
    marginBottom: SPACING.md,
    textAlign: 'center',
  },
  ctaButton: {
    backgroundColor: COLORS.white,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
    borderRadius: RADIUS.full,
  },
  ctaButtonText: {
    fontSize: SIZES.base,
    fontWeight: '600',
    color: COLORS.primary,
  },
});
