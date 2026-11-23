import React from 'react';
import { StyleSheet, View, Text, Modal, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function CartModal({ visible, cart = [], totalItems, totalPrice, updateCartQty, onCheckout, onClose }) {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalOverlay}>
        <View style={[styles.modalContent, { maxHeight: '80%' }]}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Keranjang Saya ({totalItems})</Text>
            <TouchableOpacity onPress={onClose}>
              <Feather name="x" size={24} color="#ffffff" />
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            {cart.map((item) => (
              <View key={item.product.id} style={styles.cartRowItem}>
                <Image source={{ uri: item.product.image }} style={styles.cartThumb} />
                <View style={{ flex: 1, marginLeft: 12 }}>
                  <Text style={styles.cartItemTitle}>{item.product.name}</Text>
                  <Text style={styles.cartItemPrice}>
                    Rp {(item.product.price * item.quantity).toLocaleString('id-ID')}
                  </Text>
                </View>

                <View style={styles.quantitySelectorMini}>
                  <TouchableOpacity style={styles.qtyBtnMini} onPress={() => updateCartQty(item.product.id, -1)}>
                    <Feather name="minus" size={14} color="#ffffff" />
                  </TouchableOpacity>
                  <Text style={styles.qtyValueMini}>{item.quantity}</Text>
                  <TouchableOpacity style={styles.qtyBtnMini} onPress={() => updateCartQty(item.product.id, 1)}>
                    <Feather name="plus" size={14} color="#ffffff" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>

          <View style={[styles.totalRow, { marginTop: 16 }]}>
            <Text style={styles.totalLabel}>Total Pembayaran:</Text>
            <Text style={styles.totalPrice}>Rp {totalPrice.toLocaleString('id-ID')}</Text>
          </View>

          <TouchableOpacity style={styles.addCartBtn} onPress={onCheckout}>
            <Feather name="check-circle" size={20} color="#0f172a" />
            <Text style={styles.addCartBtnText}>Check Out Pesanan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: '#161e17', borderTopLeftRadius: 28, borderTopRightRadius: 28, padding: 24, borderTopWidth: 1, borderColor: '#223023' },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  modalTitle: { fontSize: 18, fontWeight: 'bold', color: '#ffffff' },
  cartRowItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#0a0f0d', padding: 12, borderRadius: 14, marginBottom: 10, borderWidth: 1, borderColor: '#223023' },
  cartThumb: { width: 50, height: 50, borderRadius: 10 },
  cartItemTitle: { color: '#ffffff', fontWeight: '600', fontSize: 14 },
  cartItemPrice: { color: '#a3e635', fontWeight: 'bold', fontSize: 13, marginTop: 2 },
  quantitySelectorMini: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#161e17', borderRadius: 8, padding: 2 },
  qtyBtnMini: { width: 26, height: 26, backgroundColor: '#223023', borderRadius: 6, justifyContent: 'center', alignItems: 'center' },
  qtyValueMini: { color: '#ffffff', fontSize: 13, fontWeight: 'bold', paddingHorizontal: 10 },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  totalLabel: { fontSize: 14, color: '#9ca3af' },
  totalPrice: { fontSize: 18, fontWeight: 'bold', color: '#ffffff' },
  addCartBtn: { backgroundColor: '#84cc16', height: 52, borderRadius: 16, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  addCartBtnText: { color: '#0f172a', fontSize: 16, fontWeight: 'bold', marginLeft: 8 },
});