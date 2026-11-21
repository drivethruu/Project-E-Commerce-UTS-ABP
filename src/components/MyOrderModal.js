import React from 'react';
import { StyleSheet, View, Text, Modal, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function MyOrderModal({ visible, orders = [], onClose }) {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalOverlay}>
        <View style={[styles.modalContent, { maxHeight: '85%' }]}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Daftar Pesanan (My Order)</Text>
            <TouchableOpacity onPress={onClose}>
              <Feather name="x" size={24} color="#ffffff" />
            </TouchableOpacity>
          </View>

          {orders.length === 0 ? (
            <View style={styles.emptyOrders}>
              <Feather name="shopping-bag" size={60} color="#223023" />
              <Text style={styles.emptyText}>Belum ada riwayat pesanan.</Text>
            </View>
          ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
              {orders.map((order) => (
                <View key={order.id} style={styles.orderCard}>
                  <View style={styles.orderHeader}>
                    <View>
                      <Text style={styles.orderId}>{order.id}</Text>
                      <Text style={styles.orderDate}>{order.date}</Text>
                    </View>
                    <View style={styles.orderStatusBadge}>
                      <Text style={styles.orderStatusText}>{order.status}</Text>
                    </View>
                  </View>

                  <View style={styles.orderDivider} />

                  {order.items.map((sub, idx) => (
                    <View key={idx} style={styles.orderItemRow}>
                      <Text style={styles.orderItemName}>
                        {sub.quantity}x {sub.product.name}
                      </Text>
                      <Text style={styles.orderItemPrice}>
                        Rp {(sub.product.price * sub.quantity).toLocaleString('id-ID')}
                      </Text>
                    </View>
                  ))}

                  <View style={styles.orderDivider} />

                  <View style={styles.orderFooter}>
                    <Text style={styles.orderTotalLabel}>Total Belanja:</Text>
                    <Text style={styles.orderTotalValue}>Rp {order.total.toLocaleString('id-ID')}</Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          )}
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
  emptyOrders: { alignItems: 'center', paddingVertical: 40 },
  emptyText: { color: '#6b7280', marginTop: 12, fontSize: 14 },
  orderCard: { backgroundColor: '#0a0f0d', borderRadius: 16, padding: 16, marginBottom: 14, borderWidth: 1, borderColor: '#223023' },
  orderHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  orderId: { color: '#ffffff', fontWeight: 'bold', fontSize: 14 },
  orderDate: { color: '#6b7280', fontSize: 12, marginTop: 2 },
  orderStatusBadge: { backgroundColor: 'rgba(132, 204, 22, 0.15)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10 },
  orderStatusText: { color: '#84cc16', fontSize: 12, fontWeight: 'bold' },
  orderDivider: { height: 1, backgroundColor: '#223023', marginVertical: 12 },
  orderItemRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  orderItemName: { color: '#d1d5db', fontSize: 13 },
  orderItemPrice: { color: '#ffffff', fontSize: 13, fontWeight: '600' },
  orderFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  orderTotalLabel: { color: '#9ca3af', fontSize: 13 },
  orderTotalValue: { color: '#a3e635', fontSize: 15, fontWeight: 'bold' },
});