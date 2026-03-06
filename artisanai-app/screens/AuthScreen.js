import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SIZES, SPACING, RADIUS } from '../constants/theme';

export default function AuthScreen({ navigation }) {
  const [isSignUp, setIsSignUp] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [craft, setCraft] = useState('');

  const handleAuth = () => {
    // Navigate to either Shop or Creator based on role
    navigation.replace('Creator');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.backgroundLight} />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Ionicons name="spa" size={32} color={COLORS.primary} />
          <Text style={styles.headerTitle}>ArtisanAI</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Shop')}>
          <Text style={styles.headerLink}>Browse Marketplace</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.badge}>
            <Ionicons name="checkmark-circle" size={14} color={COLORS.primary} />
            <Text style={styles.badgeText}>Trusted by 10,000+ Artisans</Text>
          </View>
          <Text style={styles.heroTitle}>
            Sell your craft.{'\n'}
            <Text style={styles.heroTitleAccent}>Share your story.</Text>
          </Text>
          <Text style={styles.heroDescription}>
            ArtisanAI empowers traditional craftspeople with AI-powered tools — from stunning product photography to digital provenance certificates.
          </Text>

          {/* Features */}
          <View style={styles.features}>
            {[
              { icon: 'sparkles', text: 'AI Photo Studio — no camera needed' },
              { icon: 'shield-checkmark', text: 'Digital Provenance Certificates' },
              { icon: 'school', text: 'Free Skill Development Courses' },
              { icon: 'wallet', text: 'Transparent Earnings & Finance Hub' },
            ].map((feature, index) => (
              <View key={index} style={styles.featureItem}>
                <Ionicons name={feature.icon} size={20} color={COLORS.primary} />
                <Text style={styles.featureText}>{feature.text}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Form Section */}
        <View style={styles.formSection}>
          {/* Tabs */}
          <View style={styles.tabs}>
            <TouchableOpacity
              style={[styles.tab, isSignUp && styles.tabActive]}
              onPress={() => setIsSignUp(true)}
            >
              <Text style={[styles.tabText, isSignUp && styles.tabTextActive]}>
                Create Account
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, !isSignUp && styles.tabActive]}
              onPress={() => setIsSignUp(false)}
            >
              <Text style={[styles.tabText, !isSignUp && styles.tabTextActive]}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>

          {/* Form Header */}
          <View style={styles.formHeader}>
            <Text style={styles.formTitle}>
              {isSignUp ? 'Become a Seller' : 'Welcome Back'}
            </Text>
            <Text style={styles.formDescription}>
              {isSignUp
                ? 'Join thousands of artisans selling on ArtisanAI.'
                : 'Sign in to your artisan account.'}
            </Text>
          </View>

          {/* Form Fields */}
          {isSignUp ? (
            <>
              <View style={styles.row}>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>FIRST NAME</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Priya"
                    value={firstName}
                    onChangeText={setFirstName}
                    placeholderTextColor={COLORS.textMuted}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>LAST NAME</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Sharma"
                    value={lastName}
                    onChangeText={setLastName}
                    placeholderTextColor={COLORS.textMuted}
                  />
                </View>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>EMAIL ADDRESS</Text>
                <TextInput
                  style={styles.input}
                  placeholder="priya@example.com"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholderTextColor={COLORS.textMuted}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>PHONE (WhatsApp)</Text>
                <TextInput
                  style={styles.input}
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChangeText={setPhone}
                  keyboardType="phone-pad"
                  placeholderTextColor={COLORS.textMuted}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>CRAFT TRADITION</Text>
                <TextInput
                  style={styles.input}
                  placeholder="e.g., Warli Painting"
                  value={craft}
                  onChangeText={setCraft}
                  placeholderTextColor={COLORS.textMuted}
                />
              </View>
            </>
          ) : (
            <>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>EMAIL ADDRESS</Text>
                <TextInput
                  style={styles.input}
                  placeholder="your@email.com"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholderTextColor={COLORS.textMuted}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>PASSWORD</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your password"
                  secureTextEntry
                  placeholderTextColor={COLORS.textMuted}
                />
              </View>
            </>
          )}

          {/* Submit Button */}
          <TouchableOpacity style={styles.button} onPress={handleAuth}>
            <Text style={styles.buttonText}>
              {isSignUp ? 'Create Account' : 'Sign In'}
            </Text>
          </TouchableOpacity>

          {/* Footer Links */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            </Text>
            <TouchableOpacity onPress={() => setIsSignUp(!isSignUp)}>
              <Text style={styles.footerLink}>
                {isSignUp ? 'Sign In' : 'Create Account'}
              </Text>
            </TouchableOpacity>
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
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderColor,
    backgroundColor: COLORS.surfaceLight,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  headerTitle: {
    fontSize: SIZES.xxl,
    fontWeight: 'bold',
    color: COLORS.textMain,
  },
  headerLink: {
    fontSize: SIZES.sm,
    color: COLORS.textMuted,
  },
  scrollView: {
    flex: 1,
  },
  heroSection: {
    padding: SPACING.lg,
    backgroundColor: COLORS.backgroundLight,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
    backgroundColor: `${COLORS.primary}20`,
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: RADIUS.full,
    alignSelf: 'flex-start',
    marginBottom: SPACING.md,
  },
  badgeText: {
    fontSize: SIZES.xs,
    fontWeight: 'bold',
    color: COLORS.primary,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  heroTitle: {
    fontSize: SIZES.huge,
    fontWeight: 'bold',
    color: COLORS.textMain,
    marginBottom: SPACING.md,
    lineHeight: SIZES.huge * 1.2,
  },
  heroTitleAccent: {
    color: COLORS.primary,
    fontStyle: 'italic',
  },
  heroDescription: {
    fontSize: SIZES.base,
    color: COLORS.textMuted,
    lineHeight: SIZES.base * 1.5,
    marginBottom: SPACING.lg,
  },
  features: {
    gap: SPACING.md,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  featureText: {
    fontSize: SIZES.sm,
    color: COLORS.textMain,
    fontWeight: '500',
  },
  formSection: {
    padding: SPACING.lg,
    backgroundColor: COLORS.surfaceLight,
    borderTopLeftRadius: RADIUS.xl,
    borderTopRightRadius: RADIUS.xl,
    marginTop: SPACING.lg,
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: `${COLORS.borderColor}60`,
    borderRadius: RADIUS.md,
    padding: 4,
    marginBottom: SPACING.lg,
  },
  tab: {
    flex: 1,
    paddingVertical: SPACING.sm,
    borderRadius: RADIUS.sm,
    alignItems: 'center',
  },
  tabActive: {
    backgroundColor: COLORS.surfaceLight,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  tabText: {
    fontSize: SIZES.sm,
    fontWeight: '600',
    color: COLORS.textMuted,
  },
  tabTextActive: {
    color: COLORS.textMain,
  },
  formHeader: {
    marginBottom: SPACING.lg,
  },
  formTitle: {
    fontSize: SIZES.xxl,
    fontWeight: 'bold',
    color: COLORS.textMain,
    marginBottom: SPACING.xs,
  },
  formDescription: {
    fontSize: SIZES.sm,
    color: COLORS.textMuted,
  },
  row: {
    flexDirection: 'row',
    gap: SPACING.sm,
  },
  inputContainer: {
    marginBottom: SPACING.md,
    flex: 1,
  },
  label: {
    fontSize: SIZES.xs,
    fontWeight: '600',
    color: COLORS.textMuted,
    letterSpacing: 1,
    marginBottom: SPACING.xs,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    borderRadius: RADIUS.sm,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    fontSize: SIZES.sm,
    color: COLORS.textMain,
    backgroundColor: COLORS.surfaceLight,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.md,
    borderRadius: RADIUS.sm,
    alignItems: 'center',
    marginTop: SPACING.sm,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.base,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: SPACING.xs,
    marginTop: SPACING.lg,
  },
  footerText: {
    fontSize: SIZES.sm,
    color: COLORS.textMuted,
  },
  footerLink: {
    fontSize: SIZES.sm,
    color: COLORS.primary,
    fontWeight: '600',
  },
});
