import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function FloatingCartWidget({ totalItems, totalPrice, cartCount, onOpenCart }) {
  if (totalItems === 0) return null;

  return (
    <View style={styles.floatingCartWrapper}>
      <TouchableOpacity style={styles.floatingCartBtn} onPress={onOpenCart} activeOpacity={0.9}>
        <View style={styles.floatingCartLeft}>
          <View style={styles.cartIconCircle}>
            <Feather name="shopping-cart" size={20} color="#0f172a" />
            <View style={styles.cartItemBadge}>
              <Text style={styles.cartItemBadgeText}>{totalItems}</Text>
            </View>
          </View>
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.floatingCartTitle}>Keranjang Belanja</Text>
            <Text style={styles.floatingCartSubtitle}>{cartCount} Jenis Barang</Text>
          </View>
        </View>

        <View style={styles.floatingCartRight}>
          <Text style={styles.floatingCartPrice}>Rp {totalPrice.toLocaleString('id-ID')}</Text>
          <Feather name="chevron-right" size={20} color="#0f172a" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  floatingCartWrapper: { position: 'absolute', bottom: 90, left: 20, right: 20, zIndex: 99 },
  floatingCartBtn: { backgroundColor: '#84cc16', borderRadius: 20, paddingHorizontal: 16, paddingVertical: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', elevation: 8 },
  floatingCartLeft: { flexDirection: 'row', alignItems: 'center' },
  cartIconCircle: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center' },
  cartItemBadge: { position: 'absolute', top: -4, right: -4, backgroundColor: '#ef4444', borderRadius: 8, minWidth: 18, height: 18, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 4 },
  cartItemBadgeText: { color: '#ffffff', fontSize: 10, fontWeight: 'bold' },
  floatingCartTitle: { color: '#0f172a', fontWeight: 'bold', fontSize: 14 },
  floatingCartSubtitle: { color: '#334155', fontSize: 12 },
  floatingCartRight: { flexDirection: 'row', alignItems: 'center' },
  floatingCartPrice: { color: '#0f172a', fontWeight: 'bold', fontSize: 15, marginRight: 4 },
});