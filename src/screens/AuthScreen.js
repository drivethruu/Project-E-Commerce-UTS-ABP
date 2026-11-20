// src/screens/AuthScreen.js
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function AuthScreen({ user, setUser, onLogin }) {
  const [authMode, setAuthMode] = useState('login');

  return (
    <SafeAreaView style={styles.authContainer}>
      <StatusBar barStyle="light-content" />
      <View style={styles.authCard}>
        {/* Brand Logo */}
        <View style={styles.logoContainer}>
          <View style={styles.logoBadge}>
            <Text style={styles.logoText}>F</Text>
          </View>
          <Text style={styles.brandTitle}>F-Mart</Text>
        </View>

        {/* Title & Subtitle */}
        <Text style={styles.authHeaderTitle}>
          {authMode === 'login' ? 'Selamat Datang Kembali!' : 'Buat Akun Baru'}
        </Text>
        <Text style={styles.authSubtitle}>
          {authMode === 'login'
            ? 'Silakan masuk untuk melanjutkan belanja'
            : 'Daftar dan nikmati belanja kebutuhan mudah'}
        </Text>

        {/* Input Nama Lengkap (Khusus Mode Register) */}
        {authMode === 'register' && (
          <View style={styles.inputGroup}>
            <Feather name="user" size={20} color="#84cc16" />
            <TextInput
              placeholder="Nama Lengkap"
              placeholderTextColor="#6b7280"
              style={styles.input}
              value={user?.name || ''}
              onChangeText={(val) => setUser({ ...user, name: val })}
            />
          </View>
        )}

        {/* Input Email / Username */}
        <View style={styles.inputGroup}>
          <Feather name="mail" size={20} color="#84cc16" />
          <TextInput
            placeholder="Email / Username"
            placeholderTextColor="#6b7280"
            style={styles.input}
          />
        </View>

        {/* Input Password */}
        <View style={styles.inputGroup}>
          <Feather name="lock" size={20} color="#84cc16" />
          <TextInput
            placeholder="Kata Sandi"
            placeholderTextColor="#6b7280"
            secureTextEntry
            style={styles.input}
          />
        </View>

        {/* Tombol Utama (Masuk / Daftar) */}
        <TouchableOpacity style={styles.primaryButton} onPress={onLogin}>
          <Text style={styles.primaryButtonText}>
            {authMode === 'login' ? 'Masuk' : 'Daftar'}
          </Text>
        </TouchableOpacity>

        {/* Switcher Mode Login & Register */}
        <TouchableOpacity
          style={styles.switchAuthBtn}
          onPress={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
        >
          <Text style={styles.switchAuthText}>
            {authMode === 'login'
              ? 'Belum punya akun? Daftar sekarang'
              : 'Sudah punya akun? Masuk'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    backgroundColor: '#0a0f0d',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  authCard: {
    width: '100%',
    backgroundColor: '#161e17',
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: '#223023',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoBadge: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#84cc16',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  brandTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  authHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 6,
  },
  authSubtitle: {
    fontSize: 14,
    color: '#9ca3af',
    marginBottom: 24,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0a0f0d',
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 50,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#223023',
  },
  input: {
    flex: 1,
    color: '#ffffff',
    marginLeft: 10,
  },
  primaryButton: {
    backgroundColor: '#84cc16',
    height: 50,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  primaryButtonText: {
    color: '#0f172a',
    fontSize: 16,
    fontWeight: 'bold',
  },
  switchAuthBtn: {
    marginTop: 16,
    alignItems: 'center',
  },
  switchAuthText: {
    color: '#84cc16',
    fontSize: 14,
  },
});