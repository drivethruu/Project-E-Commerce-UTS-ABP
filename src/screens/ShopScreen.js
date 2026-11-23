import React from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function ShopScreen({ categories = [], products = [], searchQuery, setSearchQuery, onSelectProduct }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      <View style={styles.searchBarContainer}>
        <Feather name="search" size={20} color="#84cc16" />
        <TextInput
          placeholder="Cari produk makanan, minuman..."
          placeholderTextColor="#6b7280"
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery !== '' && (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Feather name="x" size={18} color="#9ca3af" />
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.sectionTitle}>Jenis Produk</Text>
      <View style={styles.categoryGrid}>
        {categories.map((cat) => (
          <TouchableOpacity key={cat.id} style={styles.categoryCard}>
            <View style={[styles.categoryIconWrap, { backgroundColor: cat.color + '20' }]}>
              <MaterialCommunityIcons name={cat.icon} size={28} color={cat.color} />
            </View>
            <Text style={styles.categoryName}>{cat.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={[styles.sectionTitle, { marginTop: 24 }]}>
        {searchQuery ? `Hasil Pencarian ("${searchQuery}")` : 'Semua Produk'}
      </Text>
      <View style={styles.gridContainer}>
        {products.map((item) => (
          <TouchableOpacity key={item.id} style={styles.productCard} onPress={() => onSelectProduct(item)}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
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
  scrollContent: { paddingHorizontal: 20, paddingBottom: 160 },
  searchBarContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#161e17', borderRadius: 16, paddingHorizontal: 14, height: 50, marginVertical: 14, borderWidth: 1, borderColor: '#223023' },
  searchInput: { flex: 1, color: '#ffffff', marginLeft: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#ffffff' },
  categoryGrid: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 14 },
  categoryCard: { alignItems: 'center', width: (width - 64) / 4 },
  categoryIconWrap: { width: 60, height: 60, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  categoryName: { fontSize: 12, color: '#9ca3af', textAlign: 'center' },
  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 12 },
  productCard: { width: (width - 52) / 2, backgroundColor: '#161e17', borderRadius: 18, padding: 12, marginBottom: 16, borderWidth: 1, borderColor: '#223023' },
  productImage: { width: '100%', height: 120, borderRadius: 12, backgroundColor: '#0a0f0d' },
  productInfo: { marginTop: 10 },
  productCategory: { fontSize: 11, color: '#84cc16', textTransform: 'uppercase', fontWeight: '600' },
  productName: { fontSize: 14, fontWeight: '600', color: '#ffffff', marginVertical: 4 },
  productPrice: { fontSize: 15, fontWeight: 'bold', color: '#a3e635' },
});