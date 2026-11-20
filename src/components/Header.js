// src/components/Header.js
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Header({ user, orderCount, onOpenOrders }) {
  return (
    <View style={styles.header}>
      <View style={styles.userInfo}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150' }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.greeting}>Halo,</Text>
          <Text style={styles.userName}>{user.name}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.myOrderButton} onPress={onOpenOrders}>
        <Feather name="shopping-bag" size={22} color="#0f172a" />
        {orderCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{orderCount}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
    borderWidth: 2,
    borderColor: '#84cc16',
  },
  greeting: {
    fontSize: 12,
    color: '#9ca3af',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  myOrderButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#84cc16',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    top: -2,
    right: -2,
    backgroundColor: '#ef4444',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: 'bold',
  },
});