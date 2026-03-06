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

export default function TrainingScreen() {
  const courses = [
    {
      title: 'Digital Marketing for Artisans',
      progress: 60,
      lessons: '8/12',
      duration: '2h 30m left',
      status: 'In Progress',
    },
    {
      title: 'Product Photography Basics',
      progress: 100,
      lessons: '10/10',
      duration: 'Completed',
      status: 'Completed',
    },
    {
      title: 'Pricing Your Handmade Products',
      progress: 0,
      lessons: '0/6',
      duration: '1h 45m',
      status: 'Not Started',
    },
  ];

  const featured = [
    { title: 'Storytelling for Artisans', category: 'Marketing', duration: '45 min' },
    { title: 'Understanding Your Customers', category: 'Business', duration: '1h 20min' },
    { title: 'Sustainable Craft Practices', category: 'Skills', duration: '55 min' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerIcon}>
            <Ionicons name="book" size={28} color={COLORS.primary} />
          </View>
          <View style={styles.headerText}>
            <Text style={styles.title}>Training Hub</Text>
            <Text style={styles.subtitle}>
              Learn new skills and grow your business
            </Text>
          </View>
        </View>

        {/* Progress Overview */}
        <View style={styles.progressCard}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressTitle}>Your Learning Progress</Text>
            <Ionicons name="trophy" size={24} color={COLORS.warning} />
          </View>
          <View style={styles.progressStats}>
            <View style={styles.progressStat}>
              <Text style={styles.progressValue}>12</Text>
              <Text style={styles.progressLabel}>Courses Completed</Text>
            </View>
            <View style={styles.progressDivider} />
            <View style={styles.progressStat}>
              <Text style={styles.progressValue}>48h</Text>
              <Text style={styles.progressLabel}>Learning Time</Text>
            </View>
            <View style={styles.progressDivider} />
            <View style={styles.progressStat}>
              <Text style={styles.progressValue}>5</Text>
              <Text style={styles.progressLabel}>Certificates</Text>
            </View>
          </View>
        </View>

        {/* Continue Learning */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Continue Learning</Text>
          {courses
            .filter((c) => c.status === 'In Progress')
            .map((course, index) => (
              <TouchableOpacity key={index} style={styles.courseCard}>
                <View style={styles.courseHeader}>
                  <View style={styles.courseIcon}>
                    <Ionicons name="play-circle" size={24} color={COLORS.primary} />
                  </View>
                  <View style={styles.courseInfo}>
                    <Text style={styles.courseTitle}>{course.title}</Text>
                    <Text style={styles.courseMeta}>
                      Lessons {course.lessons} • {course.duration}
                    </Text>
                  </View>
                </View>
                <View style={styles.progressBar}>
                  <View style={[styles.progressFill, { width: `${course.progress}%` }]} />
                </View>
                <Text style={styles.progressText}>{course.progress}% Complete</Text>
              </TouchableOpacity>
            ))}
        </View>

        {/* Featured Courses */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Courses</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllLink}>View All</Text>
            </TouchableOpacity>
          </View>
          {featured.map((course, index) => (
            <TouchableOpacity key={index} style={styles.featuredCard}>
              <View style={styles.featuredImage}>
                <Ionicons name="book-outline" size={32} color={COLORS.primary} />
              </View>
              <View style={styles.featuredContent}>
                <View style={styles.categoryBadge}>
                  <Text style={styles.categoryText}>{course.category}</Text>
                </View>
                <Text style={styles.featuredTitle}>{course.title}</Text>
                <View style={styles.featuredMeta}>
                  <View style={styles.metaItem}>
                    <Ionicons name="time-outline" size={14} color={COLORS.textMuted} />
                    <Text style={styles.metaText}>{course.duration}</Text>
                  </View>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color={COLORS.textMuted} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Browse by Category</Text>
          <View style={styles.categoriesGrid}>
            {[
              { name: 'Marketing', icon: 'megaphone', count: 12 },
              { name: 'Business Skills', icon: 'briefcase', count: 8 },
              { name: 'Craft Techniques', icon: 'hammer', count: 15 },
              { name: 'Technology', icon: 'phone-portrait', count: 6 },
            ].map((category, index) => (
              <TouchableOpacity key={index} style={styles.categoryCard}>
                <View style={styles.categoryIcon}>
                  <Ionicons name={category.icon} size={28} color={COLORS.primary} />
                </View>
                <Text style={styles.categoryName}>{category.name}</Text>
                <Text style={styles.categoryCount}>{category.count} courses</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* My Certificates */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>My Certificates</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllLink}>View All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2, 3].map((_, index) => (
              <TouchableOpacity key={index} style={styles.certificateCard}>
                <View style={styles.certificateIcon}>
                  <Ionicons name="ribbon" size={40} color={COLORS.primary} />
                </View>
                <Text style={styles.certificateTitle}>Digital Marketing</Text>
                <Text style={styles.certificateDate}>Completed Feb 2024</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* CTA Banner */}
        <View style={styles.ctaBanner}>
          <Ionicons name="sparkles" size={32} color={COLORS.primary} />
          <Text style={styles.ctaTitle}>Suggest a Course Topic</Text>
          <Text style={styles.ctaDescription}>
            Help us create courses that matter to you
          </Text>
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Share Your Ideas</Text>
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
  progressCard: {
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
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  progressTitle: {
    fontSize: SIZES.base,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  progressStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressStat: {
    flex: 1,
    alignItems: 'center',
  },
  progressValue: {
    fontSize: SIZES.xxl,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  progressLabel: {
    fontSize: SIZES.xs,
    color: COLORS.white,
    opacity: 0.9,
    marginTop: SPACING.xs,
    textAlign: 'center',
  },
  progressDivider: {
    width: 1,
    height: 40,
    backgroundColor: `${COLORS.white}30`,
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
  courseCard: {
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
  courseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  courseIcon: {
    marginRight: SPACING.md,
  },
  courseInfo: {
    flex: 1,
  },
  courseTitle: {
    fontSize: SIZES.base,
    fontWeight: '600',
    color: COLORS.textMain,
    marginBottom: SPACING.xs,
  },
  courseMeta: {
    fontSize: SIZES.xs,
    color: COLORS.textMuted,
  },
  progressBar: {
    height: 6,
    backgroundColor: COLORS.borderColor,
    borderRadius: RADIUS.full,
    marginBottom: SPACING.xs,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.full,
  },
  progressText: {
    fontSize: SIZES.xs,
    color: COLORS.textMuted,
    textAlign: 'right',
  },
  featuredCard: {
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
  featuredImage: {
    width: 60,
    height: 60,
    borderRadius: RADIUS.sm,
    backgroundColor: `${COLORS.primary}15`,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  featuredContent: {
    flex: 1,
  },
  categoryBadge: {
    backgroundColor: `${COLORS.primary}20`,
    paddingHorizontal: SPACING.xs,
    paddingVertical: 2,
    borderRadius: RADIUS.sm,
    alignSelf: 'flex-start',
    marginBottom: SPACING.xs,
  },
  categoryText: {
    fontSize: SIZES.xs,
    fontWeight: '600',
    color: COLORS.primary,
  },
  featuredTitle: {
    fontSize: SIZES.sm,
    fontWeight: '600',
    color: COLORS.textMain,
    marginBottom: SPACING.xs,
  },
  featuredMeta: {
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
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.md,
  },
  categoryCard: {
    width: '47%',
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
  categoryIcon: {
    width: 56,
    height: 56,
    borderRadius: RADIUS.md,
    backgroundColor: `${COLORS.primary}15`,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  categoryName: {
    fontSize: SIZES.sm,
    fontWeight: '600',
    color: COLORS.textMain,
    textAlign: 'center',
    marginBottom: SPACING.xs,
  },
  categoryCount: {
    fontSize: SIZES.xs,
    color: COLORS.textMuted,
  },
  certificateCard: {
    width: 150,
    backgroundColor: COLORS.surfaceLight,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    alignItems: 'center',
    marginRight: SPACING.md,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  certificateIcon: {
    marginBottom: SPACING.sm,
  },
  certificateTitle: {
    fontSize: SIZES.sm,
    fontWeight: '600',
    color: COLORS.textMain,
    textAlign: 'center',
    marginBottom: SPACING.xs,
  },
  certificateDate: {
    fontSize: SIZES.xs,
    color: COLORS.textMuted,
    textAlign: 'center',
  },
  ctaBanner: {
    backgroundColor: `${COLORS.primary}15`,
    margin: SPACING.lg,
    padding: SPACING.lg,
    borderRadius: RADIUS.lg,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: `${COLORS.primary}30`,
  },
  ctaTitle: {
    fontSize: SIZES.lg,
    fontWeight: 'bold',
    color: COLORS.textMain,
    marginTop: SPACING.sm,
  },
  ctaDescription: {
    fontSize: SIZES.sm,
    color: COLORS.textMuted,
    textAlign: 'center',
    marginTop: SPACING.xs,
    marginBottom: SPACING.md,
  },
  ctaButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
    borderRadius: RADIUS.full,
  },
  ctaButtonText: {
    fontSize: SIZES.sm,
    fontWeight: '600',
    color: COLORS.white,
  },
});
