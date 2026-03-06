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

export default function DigitalProvenanceScreen() {
  const certificates = [
    { id: 'CERT-2024-001', product: 'Warli Painting', date: '15 Feb 2024', status: 'Active' },
    { id: 'CERT-2024-002', product: 'Pottery Vase', date: '10 Feb 2024', status: 'Active' },
    { id: 'CERT-2024-003', product: 'Clay Bowl Set', date: '05 Feb 2024', status: 'Active' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerIcon}>
            <MaterialCommunityIcons name="certificate" size={28} color={COLORS.primary} />
          </View>
          <View style={styles.headerText}>
            <Text style={styles.title}>Digital Provenance</Text>
            <Text style={styles.subtitle}>
              Blockchain-verified certificates of authenticity
            </Text>
          </View>
        </View>

        {/* Info Card */}
        <View style={styles.infoCard}>
          <View style={styles.infoIcon}>
            <Ionicons name="shield-checkmark" size={32} color={COLORS.primary} />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Why Digital Provenance?</Text>
            <Text style={styles.infoDescription}>
              Each certificate proves your product's authenticity using blockchain technology, building trust with buyers and protecting your craft.
            </Text>
          </View>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{certificates.length}</Text>
            <Text style={styles.statLabel}>Certificates</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>100%</Text>
            <Text style={styles.statLabel}>Verified</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>∞</Text>
            <Text style={styles.statLabel}>Lifetime</Text>
          </View>
        </View>

        {/* Create New */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.createButton}>
            <Ionicons name="add-circle" size={24} color={COLORS.white} />
            <Text style={styles.createButtonText}>Create New Certificate</Text>
          </TouchableOpacity>
        </View>

        {/* Certificates List */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Certificates</Text>
          {certificates.map((cert, index) => (
            <View key={index} style={styles.certCard}>
              <View style={styles.certIcon}>
                <MaterialCommunityIcons name="certificate" size={32} color={COLORS.primary} />
              </View>
              <View style={styles.certInfo}>
                <Text style={styles.certId}>{cert.id}</Text>
                <Text style={styles.certProduct}>{cert.product}</Text>
                <Text style={styles.certDate}>Issued: {cert.date}</Text>
              </View>
              <View style={styles.certActions}>
                <View style={styles.statusBadge}>
                  <View style={styles.statusDot} />
                  <Text style={styles.statusText}>{cert.status}</Text>
                </View>
                <TouchableOpacity style={styles.iconButton}>
                  <Ionicons name="share-social-outline" size={20} color={COLORS.primary} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                  <Ionicons name="download-outline" size={20} color={COLORS.primary} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* How It Works */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How It Works</Text>
          {[
            {
              step: '1',
              title: 'Create Certificate',
              description: 'Add product details and upload photos',
            },
            {
              step: '2',
              title: 'Blockchain Verification',
              description: 'We generate a unique blockchain ID',
            },
            {
              step: '3',
              title: 'Share with Buyers',
              description: 'Customers can verify authenticity anytime',
            },
          ].map((item, index) => (
            <View key={index} style={styles.stepCard}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>{item.step}</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>{item.title}</Text>
                <Text style={styles.stepDescription}>{item.description}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Benefits */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Benefits</Text>
          <View style={styles.benefitsList}>
            {[
              { icon: 'shield-checkmark', text: 'Protect against counterfeits' },
              { icon: 'trending-up', text: 'Increase buyer confidence' },
              { icon: 'globe', text: 'Permanent digital record' },
              { icon: 'heart', text: 'Preserve craft heritage' },
            ].map((benefit, index) => (
              <View key={index} style={styles.benefitItem}>
                <Ionicons name={benefit.icon} size={20} color={COLORS.primary} />
                <Text style={styles.benefitText}>{benefit.text}</Text>
                <Ionicons name="checkmark-circle" size={20} color={COLORS.success} />
              </View>
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
    lineHeight: SIZES.sm * 1.5,
  },
  infoCard: {
    flexDirection: 'row',
    backgroundColor: `${COLORS.primary}15`,
    margin: SPACING.lg,
    padding: SPACING.md,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: `${COLORS.primary}30`,
  },
  infoIcon: {
    marginRight: SPACING.md,
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    fontSize: SIZES.base,
    fontWeight: 'bold',
    color: COLORS.textMain,
    marginBottom: SPACING.xs,
  },
  infoDescription: {
    fontSize: SIZES.sm,
    color: COLORS.textMuted,
    lineHeight: SIZES.sm * 1.5,
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
  section: {
    padding: SPACING.lg,
  },
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.sm,
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.md,
    borderRadius: RADIUS.md,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  createButtonText: {
    fontSize: SIZES.base,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  sectionTitle: {
    fontSize: SIZES.lg,
    fontWeight: 'bold',
    color: COLORS.textMain,
    marginBottom: SPACING.md,
  },
  certCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.surfaceLight,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    marginBottom: SPACING.sm,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  certIcon: {
    marginRight: SPACING.md,
  },
  certInfo: {
    flex: 1,
  },
  certId: {
    fontSize: SIZES.xs,
    fontWeight: '600',
    color: COLORS.primary,
    letterSpacing: 0.5,
  },
  certProduct: {
    fontSize: SIZES.base,
    fontWeight: '600',
    color: COLORS.textMain,
    marginTop: SPACING.xs,
  },
  certDate: {
    fontSize: SIZES.xs,
    color: COLORS.textMuted,
    marginTop: SPACING.xs,
  },
  certActions: {
    alignItems: 'flex-end',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
    backgroundColor: `${COLORS.success}20`,
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: RADIUS.sm,
    marginBottom: SPACING.xs,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.success,
  },
  statusText: {
    fontSize: SIZES.xs,
    fontWeight: '600',
    color: COLORS.success,
  },
  iconButton: {
    padding: SPACING.xs,
  },
  stepCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.surfaceLight,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    marginBottom: SPACING.sm,
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  stepNumberText: {
    fontSize: SIZES.base,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: SIZES.sm,
    fontWeight: '600',
    color: COLORS.textMain,
    marginBottom: SPACING.xs,
  },
  stepDescription: {
    fontSize: SIZES.xs,
    color: COLORS.textMuted,
  },
  benefitsList: {
    gap: SPACING.sm,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    backgroundColor: COLORS.surfaceLight,
    padding: SPACING.md,
    borderRadius: RADIUS.md,
  },
  benefitText: {
    flex: 1,
    fontSize: SIZES.sm,
    color: COLORS.textMain,
  },
});
