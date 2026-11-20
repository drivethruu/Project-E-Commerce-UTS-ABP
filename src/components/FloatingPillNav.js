// src/components/FloatingPillNav.js
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FloatingPillNav({ activeTab, setActiveTab }) {
  const tabs = ['Home', 'Shop', 'About'];

  return (
    <View style={styles.pillNavWrapper}>
      <View style={styles.pillNavContainer}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          let iconName = 'home-outline';

          if (tab === 'Home') iconName = isActive ? 'home' : 'home-outline';
          if (tab === 'Shop') iconName = isActive ? 'bag-handle' : 'bag-handle-outline';
          if (tab === 'About') iconName = isActive ? 'information-circle' : 'information-circle-outline';

          return (
            <TouchableOpacity
              key={tab}
              style={[styles.pillNavItem, isActive && styles.pillNavItemActive]}
              onPress={() => setActiveTab(tab)}
              activeOpacity={0.8}
            >
              <Ionicons name={iconName} size={22} color={isActive ? '#0f172a' : '#9ca3af'} />
              <Text style={[styles.pillNavText, isActive && styles.pillNavTextActive]}>
                {tab}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pillNavWrapper: {
    position: 'absolute',
    bottom: 24,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  pillNavContainer: {
    flexDirection: 'row',
    backgroundColor: '#161e17',
    borderRadius: 40,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#223023',
    elevation: 8,
  },
  pillNavItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 30,
  },
  pillNavItemActive: {
    backgroundColor: '#84cc16',
  },
  pillNavText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#9ca3af',
    marginLeft: 6,
  },
  pillNavTextActive: {
    color: '#0f172a',
  },
});