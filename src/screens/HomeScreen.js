// src/screens/HomeScreen.js
import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function HomeScreen({ products, onSelectProduct }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      {/* Hero Points Card (Style Gambar 1) */}
      <View style={styles.heroCard}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.heroLabel}>Total Poin Belanja</Text>
          <Feather name="more-horizontal" size={20} color="#0f172a" />
        </View>
        <Text style={styles.heroBalance}>23,590 pts</Text>
        <View style={styles.heroTag}>
          <Feather name="trending-up" size={14} color="#0f172a" />
          <Text style={styles.heroTagText}> Cashback 10% aktif</Text>
        </View>
      </View>

      {/* Section Header */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Produk Favorit</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>

      {/* Product Grid */}
      <View style={styles.gridContainer}>
        {products.map((item) => (
          <TouchableOpacity key={item.id} style={styles.productCard} onPress={() => onSelectProduct(item)}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <TouchableOpacity style={styles.heartBtn}>
              <Ionicons name="heart" size={18} color="#ef4444" />
            </TouchableOpacity>
            <View style={styles.productInfo}>
              <Text style={styles.productCategory}>{item.category}</Text>
              <Text style={styles.productName} numberOfLines={1}>{item.name}</Text>
              <Text style={styles.productPrice}>Rp {item.price.toLocaleString('id-ID')}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 160,
  },
  heroCard: {
    backgroundColor: '#a3e635',
    borderRadius: 24,
    padding: 20,
    marginVertical: 14,
  },
  heroLabel: {
    color: '#0f172a',
    fontSize: 14,
    fontWeight: '600',
  },
  heroBalance: {
    color: '#0f172a',
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  heroTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(15, 23, 42, 0.1)',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  heroTagText: {
    color: '#0f172a',
    fontSize: 12,
    fontWeight: '600',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  seeAllText: {
    fontSize: 14,
    color: '#84cc16',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: (width - 52) / 2,
    backgroundColor: '#161e17',
    borderRadius: 18,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#223023',
  },
  productImage: {
    width: '100%',
    height: 120,
    borderRadius: 12,
    backgroundColor: '#0a0f0d',
  },
  heartBtn: {
    position: 'absolute',
    top: 18,
    right: 18,
    backgroundColor: 'rgba(10, 15, 13, 0.7)',
    borderRadius: 14,
    padding: 6,
  },
  productInfo: {
    marginTop: 10,
  },
  productCategory: {
    fontSize: 11,
    color: '#84cc16',
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
    marginVertical: 4,
  },
  productPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#a3e635',
  },
});