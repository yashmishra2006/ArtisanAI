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

export default function FinanceHubScreen() {
  const transactions = [
    { id: '#TXN-456', type: 'Sale', product: 'Warli Painting', amount: '+₹4,500', date: '15 Feb 2024' },
    { id: '#TXN-455', type: 'Sale', product: 'Pottery Vase', amount: '+₹2,499', date: '14 Feb 2024' },
    { id: '#TXN-454', type: 'Withdrawal', product: '', amount: '-₹15,000', date: '10 Feb 2024' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerIcon}>
            <Ionicons name="wallet" size={28} color={COLORS.primary} />
          </View>
          <View style={styles.headerText}>
            <Text style={styles.title}>Finance Hub</Text>
            <Text style={styles.subtitle}>
              Track your earnings and manage payments
            </Text>
          </View>
        </View>

        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <View style={styles.balanceHeader}>
            <Text style={styles.balanceLabel}>Available Balance</Text>
            <TouchableOpacity>
              <Ionicons name="information-circle-outline" size={20} color={COLORS.white} />
            </TouchableOpacity>
          </View>
          <Text style={styles.balanceAmount}>₹24,500</Text>
          <View style={styles.balanceFooter}>
            <View style={styles.balanceItem}>
              <Text style={styles.balanceItemLabel}>Pending</Text>
              <Text style={styles.balanceItemValue}>₹3,200</Text>
            </View>
            <View style={styles.balanceDivider} />
            <View style={styles.balanceItem}>
              <Text style={styles.balanceItemLabel}>This Month</Text>
              <Text style={styles.balanceItemValue}>+₹8,900</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.withdrawButton}>
            <Text style={styles.withdrawButtonText}>Withdraw Funds</Text>
            <Ionicons name="arrow-forward" size={20} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

        {/* Quick Stats */}
        <View style={styles.statsGrid}>
          {[
            { icon: 'trending-up', label: 'Total Earnings', value: '₹1.2L' },
            { icon: 'cart', label: 'Total Sales', value: '48' },
            { icon: 'star', label: 'Avg. Rating', value: '4.8' },
          ].map((stat, index) => (
            <View key={index} style={styles.statCard}>
              <Ionicons name={stat.icon} size={24} color={COLORS.primary} />
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Monthly Chart Placeholder */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Earnings Overview</Text>
          <View style={styles.chartCard}>
            <View style={styles.chartPlaceholder}>
              <Ionicons name="bar-chart" size={48} color={COLORS.borderColor} />
              <Text style={styles.chartText}>Monthly earnings chart</Text>
            </View>
            <View style={styles.chartLegend}>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: COLORS.primary }]} />
                <Text style={styles.legendText}>Sales</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: COLORS.success }]} />
                <Text style={styles.legendText}>Payouts</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Transaction History */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Transactions</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllLink}>View All</Text>
            </TouchableOpacity>
          </View>
          {transactions.map((txn, index) => (
            <View key={index} style={styles.transactionCard}>
              <View style={[
                styles.txnIcon,
                txn.type === 'Sale' ? styles.txnIconSale : styles.txnIconWithdrawal
              ]}>
                <Ionicons
                  name={txn.type === 'Sale' ? 'arrow-down' : 'arrow-up'}
                  size={20}
                  color={txn.type === 'Sale' ? COLORS.success : COLORS.error}
                />
              </View>
              <View style={styles.txnInfo}>
                <Text style={styles.txnType}>{txn.type}</Text>
                <Text style={styles.txnProduct}>{txn.product || txn.id}</Text>
                <Text style={styles.txnDate}>{txn.date}</Text>
              </View>
              <Text style={[
                styles.txnAmount,
                txn.type === 'Sale' ? styles.txnAmountPositive : styles.txnAmountNegative
              ]}>
                {txn.amount}
              </Text>
            </View>
          ))}
        </View>

        {/* Payment Methods */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Payment Methods</Text>
            <TouchableOpacity>
              <Ionicons name="add-circle" size={24} color={COLORS.primary} />
            </TouchableOpacity>
          </View>
          <View style={styles.paymentCard}>
            <View style={styles.paymentIcon}>
              <Ionicons name="card" size={24} color={COLORS.primary} />
            </View>
            <View style={styles.paymentInfo}>
              <Text style={styles.paymentType}>Bank Account</Text>
              <Text style={styles.paymentDetails}>HDFC Bank •••• 4567</Text>
            </View>
            <View style={styles.primaryBadge}>
              <Text style={styles.primaryBadgeText}>Primary</Text>
            </View>
          </View>
        </View>

        {/* Help Card */}
        <View style={styles.helpCard}>
          <Ionicons name="help-circle" size={24} color={COLORS.primary} />
          <View style={styles.helpContent}>
            <Text style={styles.helpTitle}>Need Help?</Text>
            <Text style={styles.helpDescription}>
              Contact our support team for payment queries
            </Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="chevron-forward" size={24} color={COLORS.textMuted} />
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
    padding: SPACING.lg,
    gap: SPACING.md,
  },
  headerIcon: {
    width: 56,
    height: 56,
    borderRadius: RADIUS.md,
    backgroundColor: `${COLORS.primary}20`,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    flex: 1,
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
  balanceCard: {
    backgroundColor: COLORS.primary,
    margin: SPACING.lg,
    padding: SPACING.lg,
    borderRadius: RADIUS.lg,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
  balanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balanceLabel: {
    fontSize: SIZES.sm,
    color: COLORS.white,
    opacity: 0.9,
  },
  balanceAmount: {
    fontSize: SIZES.huge,
    fontWeight: 'bold',
    color: COLORS.white,
    marginTop: SPACING.xs,
    marginBottom: SPACING.md,
  },
  balanceFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: SPACING.md,
    borderTopWidth: 1,
    borderTopColor: `${COLORS.white}30`,
    marginBottom: SPACING.md,
  },
  balanceItem: {
    flex: 1,
  },
  balanceItemLabel: {
    fontSize: SIZES.xs,
    color: COLORS.white,
    opacity: 0.8,
  },
  balanceItemValue: {
    fontSize: SIZES.base,
    fontWeight: 'bold',
    color: COLORS.white,
    marginTop: SPACING.xs,
  },
  balanceDivider: {
    width: 1,
    height: 30,
    backgroundColor: `${COLORS.white}30`,
    marginHorizontal: SPACING.md,
  },
  withdrawButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.xs,
    backgroundColor: COLORS.white,
    paddingVertical: SPACING.sm,
    borderRadius: RADIUS.md,
  },
  withdrawButtonText: {
    fontSize: SIZES.base,
    fontWeight: '600',
    color: COLORS.primary,
  },
  statsGrid: {
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
    fontSize: SIZES.lg,
    fontWeight: 'bold',
    color: COLORS.textMain,
    marginTop: SPACING.xs,
  },
  statLabel: {
    fontSize: SIZES.xs,
    color: COLORS.textMuted,
    marginTop: SPACING.xs,
    textAlign: 'center',
  },
  section: {
    padding: SPACING.lg,
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
  },
  viewAllLink: {
    fontSize: SIZES.sm,
    color: COLORS.primary,
    fontWeight: '600',
  },
  chartCard: {
    backgroundColor: COLORS.surfaceLight,
    borderRadius: RADIUS.md,
    padding: SPACING.lg,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  chartPlaceholder: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartText: {
    fontSize: SIZES.sm,
    color: COLORS.textMuted,
    marginTop: SPACING.sm,
  },
  chartLegend: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: SPACING.lg,
    marginTop: SPACING.md,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: RADIUS.full,
  },
  legendText: {
    fontSize: SIZES.sm,
    color: COLORS.textMuted,
  },
  transactionCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.surfaceLight,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    marginBottom: SPACING.sm,
  },
  txnIcon: {
    width: 40,
    height: 40,
    borderRadius: RADIUS.full,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  txnIconSale: {
    backgroundColor: `${COLORS.success}20`,
  },
  txnIconWithdrawal: {
    backgroundColor: `${COLORS.error}20`,
  },
  txnInfo: {
    flex: 1,
  },
  txnType: {
    fontSize: SIZES.sm,
    fontWeight: '600',
    color: COLORS.textMain,
  },
  txnProduct: {
    fontSize: SIZES.xs,
    color: COLORS.textMuted,
    marginTop: 2,
  },
  txnDate: {
    fontSize: SIZES.xs,
    color: COLORS.textMuted,
    marginTop: 2,
  },
  txnAmount: {
    fontSize: SIZES.base,
    fontWeight: 'bold',
  },
  txnAmountPositive: {
    color: COLORS.success,
  },
  txnAmountNegative: {
    color: COLORS.error,
  },
  paymentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surfaceLight,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
  },
  paymentIcon: {
    width: 48,
    height: 48,
    borderRadius: RADIUS.md,
    backgroundColor: `${COLORS.primary}15`,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  paymentInfo: {
    flex: 1,
  },
  paymentType: {
    fontSize: SIZES.sm,
    fontWeight: '600',
    color: COLORS.textMain,
  },
  paymentDetails: {
    fontSize: SIZES.xs,
    color: COLORS.textMuted,
    marginTop: 2,
  },
  primaryBadge: {
    backgroundColor: `${COLORS.success}20`,
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: RADIUS.sm,
  },
  primaryBadgeText: {
    fontSize: SIZES.xs,
    fontWeight: '600',
    color: COLORS.success,
  },
  helpCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: `${COLORS.primary}15`,
    margin: SPACING.lg,
    padding: SPACING.md,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: `${COLORS.primary}30`,
  },
  helpContent: {
    flex: 1,
    marginLeft: SPACING.sm,
  },
  helpTitle: {
    fontSize: SIZES.sm,
    fontWeight: '600',
    color: COLORS.textMain,
  },
  helpDescription: {
    fontSize: SIZES.xs,
    color: COLORS.textMuted,
    marginTop: SPACING.xs,
  },
});
