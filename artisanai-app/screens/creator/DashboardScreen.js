import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS, SIZES, SPACING, RADIUS } from '../../constants/theme';

export default function DashboardScreen({ navigation }) {
  const metrics = [
    { title: 'Total Sales', value: '₹24,500', change: '+15%', color: COLORS.warning },
    { title: 'Profile Views', value: '1,247', change: '+22%', color: COLORS.primary },
    { title: 'Active Listings', value: '12', change: '+3%', color: COLORS.error },
    { title: 'Story Shares', value: '89', change: '+8%', color: COLORS.success },
  ];

  const orders = [
    { id: '#ORD-092', product: 'Peacock Wall Art', city: 'Mumbai', amount: '₹3,200', status: 'Shipped' },
    { id: '#ORD-091', product: 'Clay Bowl Set', city: 'Delhi', amount: '₹1,800', status: 'Processing' },
    { id: '#ORD-090', product: 'Warli Painting', city: 'Pune', amount: '₹4,500', status: 'Delivered' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Welcome back, Meena!</Text>
            <Text style={styles.subGreeting}>Here is what's happening with your store today.</Text>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Ionicons name="notifications-outline" size={24} color={COLORS.textMain} />
            <View style={styles.badge} />
          </TouchableOpacity>
        </View>

        {/* Metrics Grid */}
        <View style={styles.metricsGrid}>
          {metrics.map((metric, index) => (
            <View key={index} style={[styles.metricCard, { borderTopColor: metric.color }]}>
              <Text style={styles.metricTitle}>{metric.title}</Text>
              <View style={styles.metricBottom}>
                <Text style={styles.metricValue}>{metric.value}</Text>
                <View style={styles.changeContainer}>
                  <Text style={styles.changeText}>{metric.change}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* AI Suggestions */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="sparkles" size={24} color={COLORS.primary} />
            <Text style={styles.sectionTitle}>AI Marketing Suggestions</Text>
          </View>
          
          <View style={styles.suggestionCard}>
            <View style={styles.suggestionIcon}>
              <Ionicons name="flame" size={20} color={COLORS.primary} />
            </View>
            <View style={styles.suggestionContent}>
              <Text style={styles.suggestionTitle}>Diwali Posting Strategy</Text>
              <Text style={styles.suggestionDescription}>
                Schedule posts highlighting the intricate details of your new Lotus series to capture festive shoppers.
              </Text>
              <TouchableOpacity>
                <Text style={styles.suggestionAction}>Apply Strategy →</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.suggestionCard}>
            <View style={styles.suggestionIcon}>
              <Ionicons name="search" size={20} color={COLORS.primary} />
            </View>
            <View style={styles.suggestionContent}>
              <Text style={styles.suggestionTitle}>Keyword Optimization</Text>
              <Text style={styles.suggestionDescription}>
                Add "authentic hand-painted" to your listing titles to match current trending searches.
              </Text>
              <TouchableOpacity>
                <Text style={styles.suggestionAction}>Update Listings →</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Recent Orders */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Orders</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllLink}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ordersTable}>
            {orders.map((order, index) => (
              <View key={index} style={styles.orderRow}>
                <View style={styles.orderInfo}>
                  <Text style={styles.orderId}>{order.id}</Text>
                  <Text style={styles.orderProduct}>{order.product}</Text>
                  <Text style={styles.orderCity}>{order.city}</Text>
                </View>
                <View style={styles.orderRight}>
                  <Text style={styles.orderAmount}>{order.amount}</Text>
                  <View style={[
                    styles.statusBadge,
                    order.status === 'Shipped' && styles.statusShipped,
                    order.status === 'Processing' && styles.statusProcessing,
                    order.status === 'Delivered' && styles.statusDelivered,
                  ]}>
                    <Text style={styles.statusText}>{order.status}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionsGrid}>
            {[
              { icon: 'camera', label: 'AI Photo Studio', screen: 'AI Photo Studio', iconType: 'ion' },
              { icon: 'certificate', label: 'New Certificate', screen: 'Digital Provenance', iconType: 'mci' },
              { icon: 'wallet', label: 'View Earnings', screen: 'Finance Hub', iconType: 'ion' },
              { icon: 'add-circle', label: 'Add Product', screen: 'Collections', iconType: 'ion' },
            ].map((action, index) => (
              <TouchableOpacity
                key={index}
                style={styles.actionCard}
                onPress={() => navigation.navigate(action.screen)}
              >
                {action.iconType === 'ion' ? (
                  <Ionicons name={action.icon} size={32} color={COLORS.primary} />
                ) : (
                  <MaterialCommunityIcons name={action.icon} size={32} color={COLORS.primary} />
                )}
                <Text style={styles.actionLabel}>{action.label}</Text>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: SPACING.lg,
  },
  greeting: {
    fontSize: SIZES.xxl,
    fontWeight: 'bold',
    color: COLORS.textMain,
  },
  subGreeting: {
    fontSize: SIZES.sm,
    color: COLORS.textMuted,
    marginTop: SPACING.xs,
  },
  notificationButton: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 8,
    height: 8,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.error,
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: SPACING.lg,
    gap: SPACING.md,
  },
  metricCard: {
    width: '47%',
    backgroundColor: COLORS.surfaceLight,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    borderTopWidth: 4,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  metricTitle: {
    fontSize: SIZES.sm,
    color: COLORS.textMuted,
    marginBottom: SPACING.xs,
  },
  metricBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  metricValue: {
    fontSize: SIZES.xxl,
    fontWeight: 'bold',
    color: COLORS.textMain,
  },
  changeContainer: {
    backgroundColor: `${COLORS.success}20`,
    paddingHorizontal: SPACING.xs,
    paddingVertical: 2,
    borderRadius: RADIUS.sm,
  },
  changeText: {
    fontSize: SIZES.xs,
    fontWeight: '600',
    color: COLORS.success,
  },
  section: {
    padding: SPACING.lg,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    marginBottom: SPACING.md,
  },
  sectionTitle: {
    fontSize: SIZES.lg,
    fontWeight: 'bold',
    color: COLORS.textMain,
    flex: 1,
  },
  viewAllLink: {
    fontSize: SIZES.sm,
    color: COLORS.primary,
    fontWeight: '600',
  },
  suggestionCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.surfaceLight,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    marginBottom: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
  },
  suggestionIcon: {
    width: 36,
    height: 36,
    borderRadius: RADIUS.sm,
    backgroundColor: `${COLORS.primary}20`,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.sm,
  },
  suggestionContent: {
    flex: 1,
  },
  suggestionTitle: {
    fontSize: SIZES.sm,
    fontWeight: '600',
    color: COLORS.textMain,
    marginBottom: SPACING.xs,
  },
  suggestionDescription: {
    fontSize: SIZES.xs,
    color: COLORS.textMuted,
    lineHeight: SIZES.xs * 1.5,
    marginBottom: SPACING.xs,
  },
  suggestionAction: {
    fontSize: SIZES.xs,
    fontWeight: '600',
    color: COLORS.primary,
  },
  ordersTable: {
    backgroundColor: COLORS.surfaceLight,
    borderRadius: RADIUS.md,
    overflow: 'hidden',
  },
  orderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderColor,
  },
  orderInfo: {
    flex: 1,
  },
  orderId: {
    fontSize: SIZES.sm,
    fontWeight: '600',
    color: COLORS.textMain,
  },
  orderProduct: {
    fontSize: SIZES.sm,
    color: COLORS.textMuted,
    marginTop: 2,
  },
  orderCity: {
    fontSize: SIZES.xs,
    color: COLORS.textMuted,
    marginTop: 2,
  },
  orderRight: {
    alignItems: 'flex-end',
  },
  orderAmount: {
    fontSize: SIZES.sm,
    fontWeight: '600',
    color: COLORS.textMain,
    marginBottom: SPACING.xs,
  },
  statusBadge: {
    paddingHorizontal: SPACING.xs,
    paddingVertical: 2,
    borderRadius: RADIUS.sm,
  },
  statusShipped: {
    backgroundColor: `${COLORS.primary}20`,
  },
  statusProcessing: {
    backgroundColor: `${COLORS.warning}20`,
  },
  statusDelivered: {
    backgroundColor: `${COLORS.success}20`,
  },
  statusText: {
    fontSize: SIZES.xs,
    fontWeight: '600',
    color: COLORS.primary,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.md,
    marginTop: SPACING.sm,
  },
  actionCard: {
    width: '47%',
    backgroundColor: COLORS.surfaceLight,
    borderRadius: RADIUS.md,
    padding: SPACING.lg,
    alignItems: 'center',
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  actionLabel: {
    fontSize: SIZES.sm,
    fontWeight: '600',
    color: COLORS.textMain,
    marginTop: SPACING.sm,
    textAlign: 'center',
  },
});
