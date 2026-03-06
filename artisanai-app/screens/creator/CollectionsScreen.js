import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES, SPACING, RADIUS } from '../../constants/theme';

export default function CollectionsScreen() {
  const products = [
    { name: 'Peacock Wall Art', price: '₹3,200', status: 'Active', views: 234, stock: 3 },
    { name: 'Clay Bowl Set', price: '₹1,800', status: 'Active', views: 189, stock: 5 },
    { name: 'Warli Painting', price: '₹4,500', status: 'Active', views: 312, stock: 2 },
    { name: 'Pottery Vase', price: '₹2,499', status: 'Draft', views: 0, stock: 4 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>My Collections</Text>
            <Text style={styles.subtitle}>Manage your product listings</Text>
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add-circle" size={32} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

        {/* Stats Row */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Total Products</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>10</Text>
            <Text style={styles.statLabel}>Active</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>2</Text>
            <Text style={styles.statLabel}>Drafts</Text>
          </View>
        </View>

        {/* Filter Tabs */}
        <View style={styles.filterTabs}>
          <TouchableOpacity style={[styles.filterTab, styles.filterTabActive]}>
            <Text style={[styles.filterTabText, styles.filterTabTextActive]}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterTab}>
            <Text style={styles.filterTabText}>Active</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterTab}>
            <Text style={styles.filterTabText}>Drafts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterTab}>
            <Text style={styles.filterTabText}>Out of Stock</Text>
          </TouchableOpacity>
        </View>

        {/* Products List */}
        <View style={styles.productsList}>
          {products.map((product, index) => (
            <TouchableOpacity key={index} style={styles.productCard}>
              <View style={styles.productImage}>
                <Ionicons name="image" size={40} color={COLORS.borderColor} />
              </View>
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>{product.price}</Text>
                <View style={styles.productMeta}>
                  <View style={styles.metaItem}>
                    <Ionicons name="eye" size={14} color={COLORS.textMuted} />
                    <Text style={styles.metaText}>{product.views} views</Text>
                  </View>
                  <View style={styles.metaItem}>
                    <Ionicons name="cube" size={14} color={COLORS.textMuted} />
                    <Text style={styles.metaText}>{product.stock} in stock</Text>
                  </View>
                </View>
              </View>
              <View style={styles.productActions}>
                <View style={[
                  styles.statusBadge,
                  product.status === 'Active' ? styles.statusActive : styles.statusDraft
                ]}>
                  <Text style={styles.statusText}>{product.status}</Text>
                </View>
                <TouchableOpacity style={styles.moreButton}>
                  <Ionicons name="ellipsis-vertical" size={20} color={COLORS.textMuted} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Empty State for New Users */}
        {products.length === 0 && (
          <View style={styles.emptyState}>
            <Ionicons name="cube-outline" size={64} color={COLORS.borderColor} />
            <Text style={styles.emptyTitle}>No Products Yet</Text>
            <Text style={styles.emptyDescription}>
              Start adding your handcrafted products to reach customers worldwide
            </Text>
            <TouchableOpacity style={styles.emptyButton}>
              <Text style={styles.emptyButtonText}>Add Your First Product</Text>
            </TouchableOpacity>
          </View>
        )}
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
    alignItems: 'flex-start',
    padding: SPACING.lg,
  },
  title: {
    fontSize: SIZES.xxl,
    fontWeight: 'bold',
    color: COLORS.textMain,
  },
  subtitle: {
    fontSize: SIZES.sm,
    color: COLORS.textMuted,
    marginTop: SPACING.xs,
  },
  addButton: {
    padding: SPACING.xs,
  },
  statsRow: {
    flexDirection: 'row',
    paddingHorizontal: SPACING.lg,
    gap: SPACING.md,
    marginBottom: SPACING.lg,
  },
  statCard: {
    flex: 1,
    backgroundColor: COLORS.surfaceLight,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    alignItems: 'center',
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  statValue: {
    fontSize: SIZES.xxl,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  statLabel: {
    fontSize: SIZES.xs,
    color: COLORS.textMuted,
    marginTop: SPACING.xs,
  },
  filterTabs: {
    flexDirection: 'row',
    paddingHorizontal: SPACING.lg,
    gap: SPACING.sm,
    marginBottom: SPACING.md,
  },
  filterTab: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.surfaceLight,
  },
  filterTabActive: {
    backgroundColor: COLORS.primary,
  },
  filterTabText: {
    fontSize: SIZES.sm,
    fontWeight: '600',
    color: COLORS.textMain,
  },
  filterTabTextActive: {
    color: COLORS.white,
  },
  productsList: {
    padding: SPACING.lg,
    gap: SPACING.md,
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.surfaceLight,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: RADIUS.sm,
    backgroundColor: COLORS.backgroundLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: SIZES.base,
    fontWeight: '600',
    color: COLORS.textMain,
    marginBottom: SPACING.xs,
  },
  productPrice: {
    fontSize: SIZES.lg,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: SPACING.xs,
  },
  productMeta: {
    flexDirection: 'row',
    gap: SPACING.md,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
  },
  metaText: {
    fontSize: SIZES.xs,
    color: COLORS.textMuted,
  },
  productActions: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  statusBadge: {
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: RADIUS.sm,
  },
  statusActive: {
    backgroundColor: `${COLORS.success}20`,
  },
  statusDraft: {
    backgroundColor: `${COLORS.textMuted}20`,
  },
  statusText: {
    fontSize: SIZES.xs,
    fontWeight: '600',
    color: COLORS.success,
  },
  moreButton: {
    padding: SPACING.xs,
  },
  emptyState: {
    alignItems: 'center',
    padding: SPACING.xl,
    marginTop: SPACING.xl,
  },
  emptyTitle: {
    fontSize: SIZES.xl,
    fontWeight: 'bold',
    color: COLORS.textMain,
    marginTop: SPACING.md,
  },
  emptyDescription: {
    fontSize: SIZES.sm,
    color: COLORS.textMuted,
    textAlign: 'center',
    marginTop: SPACING.xs,
    marginBottom: SPACING.lg,
  },
  emptyButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    borderRadius: RADIUS.full,
  },
  emptyButtonText: {
    fontSize: SIZES.sm,
    fontWeight: '600',
    color: COLORS.white,
  },
});
