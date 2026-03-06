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

export default function CommunityScreen() {
  const posts = [
    {
      author: 'Priya Sharma',
      time: '2h ago',
      content: 'Just completed a new Warli painting collection! The process of creating these traditional patterns always reminds me why I love this craft. 🎨',
      likes: 24,
      comments: 8,
      image: true,
    },
    {
      author: 'Rajesh Kumar',
      time: '5h ago',
      content: 'Tips for new artisans: Never compromise on quality, even when starting out. Your reputation is everything! #ArtisanTips',
      likes: 42,
      comments: 15,
      image: false,
    },
  ];

  const artisans = [
    { name: 'Meena Patel', craft: 'Pottery', followers: '2.4K' },
    { name: 'Arjun Singh', craft: 'Woodwork', followers: '1.8K' },
    { name: 'Lakshmi Iyer', craft: 'Textiles', followers: '3.2K' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Community</Text>
        <TouchableOpacity>
          <Ionicons name="chatbubbles-outline" size={24} color={COLORS.textMain} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Create Post */}
        <View style={styles.createPostCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>P</Text>
          </View>
          <TextInput
            style={styles.createPostInput}
            placeholder="Share your craft story..."
            placeholderTextColor={COLORS.textMuted}
          />
          <TouchableOpacity style={styles.createPostButton}>
            <Ionicons name="send" size={20} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

        {/* Trending Topics */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trending Topics</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {['#TraditionalCrafts', '#DiwaliFestival', '#SustainableArt', '#HandmadeIndia'].map(
              (tag, index) => (
                <TouchableOpacity key={index} style={styles.trendingTag}>
                  <Text style={styles.trendingTagText}>{tag}</Text>
                </TouchableOpacity>
              )
            )}
          </ScrollView>
        </View>

        {/* Feed */}
        <View style={styles.section}>
          {posts.map((post, index) => (
            <View key={index} style={styles.postCard}>
              <View style={styles.postHeader}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>{post.author[0]}</Text>
                </View>
                <View style={styles.postAuthorInfo}>
                  <Text style={styles.postAuthor}>{post.author}</Text>
                  <Text style={styles.postTime}>{post.time}</Text>
                </View>
                <TouchableOpacity>
                  <Ionicons name="ellipsis-horizontal" size={20} color={COLORS.textMuted} />
                </TouchableOpacity>
              </View>

              <Text style={styles.postContent}>{post.content}</Text>

              {post.image && (
                <View style={styles.postImage}>
                  <Ionicons name="image" size={48} color={COLORS.borderColor} />
                </View>
              )}

              <View style={styles.postActions}>
                <TouchableOpacity style={styles.postAction}>
                  <Ionicons name="heart-outline" size={22} color={COLORS.textMuted} />
                  <Text style={styles.postActionText}>{post.likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.postAction}>
                  <Ionicons name="chatbubble-outline" size={20} color={COLORS.textMuted} />
                  <Text style={styles.postActionText}>{post.comments}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.postAction}>
                  <Ionicons name="share-social-outline" size={20} color={COLORS.textMuted} />
                  <Text style={styles.postActionText}>Share</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* Suggested Artisans */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Suggested Artisans</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllLink}>View All</Text>
            </TouchableOpacity>
          </View>
          {artisans.map((artisan, index) => (
            <View key={index} style={styles.artisanCard}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{artisan.name[0]}</Text>
              </View>
              <View style={styles.artisanInfo}>
                <Text style={styles.artisanName}>{artisan.name}</Text>
                <Text style={styles.artisanCraft}>{artisan.craft}</Text>
                <Text style={styles.artisanFollowers}>{artisan.followers} followers</Text>
              </View>
              <TouchableOpacity style={styles.followButton}>
                <Text style={styles.followButtonText}>Follow</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Community Guidelines */}
        <View style={styles.guidelinesCard}>
          <Ionicons name="shield-checkmark" size={24} color={COLORS.primary} />
          <View style={styles.guidelinesContent}>
            <Text style={styles.guidelinesTitle}>Community Guidelines</Text>
            <Text style={styles.guidelinesDescription}>
              Keep our community respectful and supportive
            </Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="chevron-forward" size={20} color={COLORS.textMuted} />
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
    padding: SPACING.lg,
    backgroundColor: COLORS.surfaceLight,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderColor,
  },
  title: {
    fontSize: SIZES.xxl,
    fontWeight: 'bold',
    color: COLORS.textMain,
  },
  createPostCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surfaceLight,
    padding: SPACING.md,
    gap: SPACING.sm,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderColor,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: SIZES.base,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  createPostInput: {
    flex: 1,
    fontSize: SIZES.sm,
    color: COLORS.textMain,
  },
  createPostButton: {
    padding: SPACING.xs,
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
    marginBottom: SPACING.md,
  },
  viewAllLink: {
    fontSize: SIZES.sm,
    color: COLORS.primary,
    fontWeight: '600',
  },
  trendingTag: {
    backgroundColor: `${COLORS.primary}15`,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
    borderRadius: RADIUS.full,
    marginRight: SPACING.sm,
  },
  trendingTagText: {
    fontSize: SIZES.sm,
    fontWeight: '600',
    color: COLORS.primary,
  },
  postCard: {
    backgroundColor: COLORS.surfaceLight,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  postAuthorInfo: {
    flex: 1,
    marginLeft: SPACING.sm,
  },
  postAuthor: {
    fontSize: SIZES.sm,
    fontWeight: '600',
    color: COLORS.textMain,
  },
  postTime: {
    fontSize: SIZES.xs,
    color: COLORS.textMuted,
    marginTop: 2,
  },
  postContent: {
    fontSize: SIZES.sm,
    color: COLORS.textMain,
    lineHeight: SIZES.sm * 1.5,
    marginBottom: SPACING.sm,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.backgroundLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  postActions: {
    flexDirection: 'row',
    gap: SPACING.lg,
    paddingTop: SPACING.sm,
    borderTopWidth: 1,
    borderTopColor: COLORS.borderColor,
  },
  postAction: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
  },
  postActionText: {
    fontSize: SIZES.sm,
    color: COLORS.textMuted,
  },
  artisanCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surfaceLight,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    marginBottom: SPACING.sm,
  },
  artisanInfo: {
    flex: 1,
    marginLeft: SPACING.sm,
  },
  artisanName: {
    fontSize: SIZES.sm,
    fontWeight: '600',
    color: COLORS.textMain,
  },
  artisanCraft: {
    fontSize: SIZES.xs,
    color: COLORS.textMuted,
    marginTop: 2,
  },
  artisanFollowers: {
    fontSize: SIZES.xs,
    color: COLORS.textMuted,
    marginTop: 2,
  },
  followButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
    borderRadius: RADIUS.full,
  },
  followButtonText: {
    fontSize: SIZES.xs,
    fontWeight: '600',
    color: COLORS.white,
  },
  guidelinesCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: `${COLORS.primary}15`,
    margin: SPACING.lg,
    padding: SPACING.md,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: `${COLORS.primary}30`,
  },
  guidelinesContent: {
    flex: 1,
    marginLeft: SPACING.sm,
  },
  guidelinesTitle: {
    fontSize: SIZES.sm,
    fontWeight: '600',
    color: COLORS.textMain,
  },
  guidelinesDescription: {
    fontSize: SIZES.xs,
    color: COLORS.textMuted,
    marginTop: SPACING.xs,
  },
});
