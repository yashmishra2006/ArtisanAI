import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';

// Import screens (to be created)
import AuthScreen from '../screens/AuthScreen';
import ShopHomeScreen from '../screens/shop/ShopHomeScreen';
import MarketplaceScreen from '../screens/shop/MarketplaceScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import DashboardScreen from '../screens/creator/DashboardScreen';
import CollectionsScreen from '../screens/creator/CollectionsScreen';
import AIPhotoStudioScreen from '../screens/creator/AIPhotoStudioScreen';
import DigitalProvenanceScreen from '../screens/creator/DigitalProvenanceScreen';
import FinanceHubScreen from '../screens/creator/FinanceHubScreen';
import TrainingScreen from '../screens/creator/TrainingScreen';
import CommunityScreen from '../screens/creator/CommunityScreen';
import SettingsScreen from '../screens/creator/SettingsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Shop Tab Navigator
function ShopTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textMuted,
        tabBarStyle: {
          backgroundColor: COLORS.surfaceLight,
          borderTopColor: COLORS.borderColor,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="ShopHome"
        component={ShopHomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Marketplace"
        component={MarketplaceScreen}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="storefront" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={ShopHomeScreen}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ShopHomeScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Creator Drawer Navigator
function CreatorDrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: COLORS.primary,
        drawerInactiveTintColor: COLORS.textMuted,
        drawerStyle: {
          backgroundColor: COLORS.surfaceLight,
        },
        headerStyle: {
          backgroundColor: COLORS.surfaceLight,
        },
        headerTintColor: COLORS.textMain,
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Collections"
        component={CollectionsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="grid" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="AI Photo Studio"
        component={AIPhotoStudioScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="camera" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Digital Provenance"
        component={DigitalProvenanceScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="certificate" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Finance Hub"
        component={FinanceHubScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="wallet" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Training"
        component={TrainingScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="book" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

// Main Stack Navigator
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Shop" component={ShopTabNavigator} />
        <Stack.Screen name="Creator" component={CreatorDrawerNavigator} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
