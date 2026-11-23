// App.js
import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Text } from 'react-native';

// Import Data Shared
import { FAVORITE_PRODUCTS, CATEGORIES } from './src/data/mockData';

// Import Komponen & Layar (Developer 1)
import Header from './src/components/Header';
import FloatingPillNav from './src/components/FloatingPillNav';
import AuthScreen from './src/screens/AuthScreen';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';

// Import Komponen & Layar (Developer 2)
import ShopScreen from './src/screens/ShopScreen';
import FloatingCartWidget from './src/components/FloatingCartWidget';
import ProductDetailModal from './src/components/ProductDetailModal';
import CartModal from './src/components/CartModal';
import MyOrderModal from './src/components/MyOrderModal';

export default function App() {
  // State Autentikasi & Navigasi (Developer 1)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [user, setUser] = useState({ name: 'Neville Ardian', username: '@neville' });

  // State Keranjang, Pesanan, & Pencarian (Developer 2)
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // State Modals (Developer 2)
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  // Kalkulasi Total Keranjang
  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartPrice = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  // Handlers Produk & Keranjang
  const openProductModal = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setIsDetailModalOpen(true);
  };

  const handleAddToCart = () => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.product.id === selectedProduct.id);
      if (index > -1) {
        const updated = [...prevCart];
        updated[index].quantity += quantity;
        return updated;
      }
      return [...prevCart, { product: selectedProduct, quantity }];
    });
    setIsDetailModalOpen(false);
  };

  const updateCartQty = (productId, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;

    const newOrder = {
      id: `ORD-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      items: [...cart],
      total: totalCartPrice,
      status: 'Diproses',
    };

    setOrders((prev) => [newOrder, ...prev]);
    setCart([]);
    setIsCartModalOpen(false);
    setIsOrderModalOpen(true);
  };

  const filteredProducts = (FAVORITE_PRODUCTS || []).filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  if (!isAuthenticated) {
    return (
      <AuthScreen
        user={user}
        setUser={setUser}
        onLogin={() => setIsAuthenticated(true)}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header Utama */}
      <Header
        user={user}
        orderCount={orders.length}
        onOpenOrders={() => setIsOrderModalOpen(true)}
      />

      {/* Area Layar Utama */}
      <View style={{ flex: 1 }}>
        {activeTab === 'Home' && (
          <HomeScreen
            products={FAVORITE_PRODUCTS}
            onSelectProduct={openProductModal}
          />
        )}
        {activeTab === 'Shop' && (
          <ShopScreen
            categories={CATEGORIES}
            products={filteredProducts}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSelectProduct={openProductModal}
          />
        )}
        {activeTab === 'About' && (
          <AboutScreen onLogout={() => setIsAuthenticated(false)} />
        )}
      </View>

      {/* Pop-up Widget Keranjang Melayang */}
      <FloatingCartWidget
        totalItems={totalCartItems}
        totalPrice={totalCartPrice}
        cartCount={cart.length}
        onOpenCart={() => setIsCartModalOpen(true)}
      />

      {/* Bar Navigasi Pill Melayang */}
      <FloatingPillNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Modals Pop-up */}
      <ProductDetailModal
        visible={isDetailModalOpen}
        product={selectedProduct}
        quantity={quantity}
        setQuantity={setQuantity}
        onClose={() => setIsDetailModalOpen(false)}
        onAddToCart={handleAddToCart}
      />

      <CartModal
        visible={isCartModalOpen}
        cart={cart}
        totalItems={totalCartItems}
        totalPrice={totalCartPrice}
        updateCartQty={updateCartQty}
        onCheckout={handleCheckout}
        onClose={() => setIsCartModalOpen(false)}
      />

      <MyOrderModal
        visible={isOrderModalOpen}
        orders={orders}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0f0d',
  },
});