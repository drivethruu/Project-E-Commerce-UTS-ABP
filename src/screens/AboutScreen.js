// src/screens/AboutScreen.js
import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function AboutScreen({ onLogout }) {
  return (
    <ScrollView contentContainerStyle={styles.aboutContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.aboutLogoWrap}>
        <Ionicons name="information-circle-outline" size={80} color="#84cc16" />
      </View>
      <Text style={styles.aboutTitle}>Tentang F-Mart</Text>
      <Text style={styles.aboutVersion}>Versi Aplikasi 1.0.0</Text>

      <View style={styles.aboutCard}>
        <Text style={styles.aboutDescription}>
          F-Mart adalah aplikasi e-commerce modern yang menyediakan segala kebutuhan pokok Anda mulai dari makanan, minuman segar, hingga obat-obatan (pharmaceutical) dengan pengiriman cepat dan aman.
        </Text>
      </View>

      <TouchableOpacity style={styles.logoutBtn} onPress={onLogout}>
        <Feather name="log-out" size={18} color="#ef4444" />
        <Text style={styles.logoutBtnText}>Keluar Akun</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  aboutContainer: {
    alignItems: 'center',
    padding: 24,
    paddingBottom: 160,
  },
  aboutLogoWrap: {
    marginTop: 20,
    marginBottom: 10,
  },
  aboutTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  aboutVersion: {
    fontSize: 14,
    color: '#9ca3af',
    marginBottom: 24,
  },
  aboutCard: {
    backgroundColor: '#161e17',
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: '#223023',
    width: '100%',
  },
  aboutDescription: {
    fontSize: 14,
    color: '#d1d5db',
    lineHeight: 22,
    textAlign: 'center',
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 14,
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
  },
  logoutBtnText: {
    color: '#ef4444',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});