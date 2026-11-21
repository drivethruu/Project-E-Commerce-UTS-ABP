import React from 'react';
import { StyleSheet, View, Text, Modal, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function ProductDetailModal({ visible, product, quantity, setQuantity, onClose, onAddToCart }) {
  if (!product) return null;

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Detail Produk</Text>
            <TouchableOpacity onPress={onClose}>
              <Feather name="x" size={24} color="#ffffff" />
            </TouchableOpacity>
          </View>

          <Image source={{ uri: product.image }} style={styles.modalImage} />
          <Text style={styles.modalProductName}>{product.name}</Text>
          <Text style={styles.modalProductCategory}>{product.category}</Text>
          <Text style={styles.modalPrice}>Rp {product.price.toLocaleString('id-ID')}</Text>

          <View style={styles.quantityContainer}>
            <Text style={styles.quantityLabel}>Jumlah:</Text>
            <View style={styles.quantitySelector}>
              <TouchableOpacity style={styles.qtyBtn} onPress={() => setQuantity(Math.max(1, quantity - 1))}>
                <Feather name="minus" size={18} color="#ffffff" />
              </TouchableOpacity>
              <Text style={styles.qtyValue}>{quantity}</Text>
              <TouchableOpacity style={styles.qtyBtn} onPress={() => setQuantity(quantity + 1)}>
                <Feather name="plus" size={18} color="#ffffff" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total Harga:</Text>
            <Text style={styles.totalPrice}>Rp {(product.price * quantity).toLocaleString('id-ID')}</Text>
          </View>

          <TouchableOpacity style={styles.addCartBtn} onPress={onAddToCart}>
            <Feather name="shopping-cart" size={20} color="#0f172a" />
            <Text style={styles.addCartBtnText}>Masukkan Keranjang</Text>
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
  modalImage: { width: '100%', height: 180, borderRadius: 16, marginBottom: 16 },
  modalProductName: { fontSize: 18, fontWeight: 'bold', color: '#ffffff' },
  modalProductCategory: { fontSize: 12, color: '#84cc16', marginTop: 4 },
  modalPrice: { fontSize: 20, fontWeight: 'bold', color: '#a3e635', marginVertical: 10 },
  quantityContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 16, paddingVertical: 12, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#223023' },
  quantityLabel: { fontSize: 16, color: '#ffffff', fontWeight: '600' },
  quantitySelector: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#0a0f0d', borderRadius: 12, padding: 4 },
  qtyBtn: { width: 36, height: 36, backgroundColor: '#223023', borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
  qtyValue: { fontSize: 16, fontWeight: 'bold', color: '#ffffff', paddingHorizontal: 16 },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  totalLabel: { fontSize: 14, color: '#9ca3af' },
  totalPrice: { fontSize: 18, fontWeight: 'bold', color: '#ffffff' },
  addCartBtn: { backgroundColor: '#84cc16', height: 52, borderRadius: 16, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  addCartBtnText: { color: '#0f172a', fontSize: 16, fontWeight: 'bold', marginLeft: 8 },
});