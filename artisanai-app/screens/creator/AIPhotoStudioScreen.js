import React, { useState } from 'react';
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

export default function AIPhotoStudioScreen() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const templates = [
    { id: 1, name: 'Clean White', icon: 'square-outline' },
    { id: 2, name: 'Natural Light', icon: 'sunny-outline' },
    { id: 3, name: 'Studio Setup', icon: 'bulb-outline' },
    { id: 4, name: 'Lifestyle', icon: 'home-outline' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerIcon}>
            <Ionicons name="sparkles" size={28} color={COLORS.primary} />
          </View>
          <View style={styles.headerText}>
            <Text style={styles.title}>AI Photo Studio</Text>
            <Text style={styles.subtitle}>
              Transform simple photos into professional product images
            </Text>
          </View>
        </View>

        {/* Upload Section */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.uploadArea}>
            <Ionicons name="camera" size={48} color={COLORS.primary} />
            <Text style={styles.uploadTitle}>Take or Upload Photo</Text>
            <Text style={styles.uploadDescription}>
              Snap a photo of your product or choose from gallery
            </Text>
            <View style={styles.uploadButtons}>
              <TouchableOpacity style={styles.uploadButton}>
                <Ionicons name="camera-outline" size={20} color={COLORS.white} />
                <Text style={styles.uploadButtonText}>Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.uploadButton, styles.uploadButtonSecondary]}>
                <Ionicons name="images-outline" size={20} color={COLORS.primary} />
                <Text style={[styles.uploadButtonText, styles.uploadButtonTextSecondary]}>
                  Gallery
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>

        {/* Background Templates */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Choose Background Style</Text>
          <View style={styles.templatesGrid}>
            {templates.map((template) => (
              <TouchableOpacity
                key={template.id}
                style={[
                  styles.templateCard,
                  selectedTemplate === template.id && styles.templateCardActive,
                ]}
                onPress={() => setSelectedTemplate(template.id)}
              >
                <View style={styles.templateIcon}>
                  <Ionicons name={template.icon} size={32} color={
                    selectedTemplate === template.id ? COLORS.white : COLORS.primary
                  } />
                </View>
                <Text style={[
                  styles.templateName,
                  selectedTemplate === template.id && styles.templateNameActive,
                ]}>
                  {template.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Features */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>AI Features</Text>
          {[
            {
              icon: 'cut-outline',
              title: 'Auto Background Removal',
              description: 'Automatically removes messy backgrounds',
            },
            {
              icon: 'color-palette-outline',
              title: 'Color Enhancement',
              description: 'Makes colors pop and true-to-life',
            },
            {
              icon: 'resize-outline',
              title: 'Smart Framing',
              description: 'Perfect composition every time',
            },
            {
              icon: 'contrast-outline',
              title: 'Lighting Correction',
              description: 'Balances shadows and highlights',
            },
          ].map((feature, index) => (
            <View key={index} style={styles.featureCard}>
              <View style={styles.featureIcon}>
                <Ionicons name={feature.icon} size={24} color={COLORS.primary} />
              </View>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDescription}>{feature.description}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Recent Edits */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Edits</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllLink}>View All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recentEdits}>
            {[1, 2, 3, 4].map((_, index) => (
              <TouchableOpacity key={index} style={styles.recentEditCard}>
                <View style={styles.recentEditImage}>
                  <Ionicons name="image" size={32} color={COLORS.borderColor} />
                </View>
                <Text style={styles.recentEditDate}>2 days ago</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* CTA */}
        <View style={styles.ctaBox}>
          <Ionicons name="information-circle" size={24} color={COLORS.primary} />
          <Text style={styles.ctaText}>
            Tip: Use natural light when taking photos for best AI results
          </Text>
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
  section: {
    padding: SPACING.lg,
  },
  uploadArea: {
    backgroundColor: COLORS.surfaceLight,
    borderRadius: RADIUS.lg,
    padding: SPACING.xl,
    alignItems: 'center',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: COLORS.primary,
  },
  uploadTitle: {
    fontSize: SIZES.lg,
    fontWeight: 'bold',
    color: COLORS.textMain,
    marginTop: SPACING.md,
  },
  uploadDescription: {
    fontSize: SIZES.sm,
    color: COLORS.textMuted,
    textAlign: 'center',
    marginTop: SPACING.xs,
    marginBottom: SPACING.lg,
  },
  uploadButtons: {
    flexDirection: 'row',
    gap: SPACING.sm,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
    borderRadius: RADIUS.full,
  },
  uploadButtonSecondary: {
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  uploadButtonText: {
    fontSize: SIZES.sm,
    fontWeight: '600',
    color: COLORS.white,
  },
  uploadButtonTextSecondary: {
    color: COLORS.primary,
  },
  sectionTitle: {
    fontSize: SIZES.lg,
    fontWeight: 'bold',
    color: COLORS.textMain,
    marginBottom: SPACING.md,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  viewAllLink: {
    fontSize: SIZES.sm,
    color: COLORS.primary,
    fontWeight: '600',
  },
  templatesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.md,
  },
  templateCard: {
    width: '47%',
    backgroundColor: COLORS.surfaceLight,
    borderRadius: RADIUS.md,
    padding: SPACING.lg,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  templateCardActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primaryDark,
  },
  templateIcon: {
    marginBottom: SPACING.sm,
  },
  templateName: {
    fontSize: SIZES.sm,
    fontWeight: '600',
    color: COLORS.textMain,
    textAlign: 'center',
  },
  templateNameActive: {
    color: COLORS.white,
  },
  featureCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.surfaceLight,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    marginBottom: SPACING.sm,
  },
  featureIcon: {
    width: 40,
    height: 40,
    borderRadius: RADIUS.sm,
    backgroundColor: `${COLORS.primary}15`,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.sm,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: SIZES.sm,
    fontWeight: '600',
    color: COLORS.textMain,
    marginBottom: SPACING.xs,
  },
  featureDescription: {
    fontSize: SIZES.xs,
    color: COLORS.textMuted,
  },
  recentEdits: {
    marginTop: SPACING.sm,
  },
  recentEditCard: {
    marginRight: SPACING.md,
    alignItems: 'center',
  },
  recentEditImage: {
    width: 120,
    height: 120,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.surfaceLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },
  recentEditDate: {
    fontSize: SIZES.xs,
    color: COLORS.textMuted,
  },
  ctaBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    backgroundColor: `${COLORS.primary}15`,
    margin: SPACING.lg,
    padding: SPACING.md,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: `${COLORS.primary}30`,
  },
  ctaText: {
    flex: 1,
    fontSize: SIZES.sm,
    color: COLORS.textMain,
    lineHeight: SIZES.sm * 1.5,
  },
});
