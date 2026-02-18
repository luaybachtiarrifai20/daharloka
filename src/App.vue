<template>
  <div class="app-container">
    <Navbar />
    <router-view />
    <CartDrawer />
    
    <div class="floating-cart" @click="toggleCart" v-if="totalItems > 0">
      <span class="cart-icon">🛒</span>
      <span class="cart-badge">{{ totalItems }}</span>
    </div>

    <footer>
      <div class="container footer-content">
        <p>&copy; 2026 Daharloka. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import CartDrawer from './components/CartDrawer.vue';
import { useCart } from './stores/cart';

const { toggleCart, totalItems } = useCart();
</script>

<style scoped>
footer {
  background-color: var(--text-color);
  color: var(--white);
  padding: 20px 0;
  text-align: center;
  margin-top: 50px;
}

.floating-cart {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: var(--primary-color);
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  cursor: pointer;
  z-index: 1500;
  transition: transform 0.2s;
}

.floating-cart:hover {
  transform: scale(1.1);
}

.cart-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: var(--secondary-color);
  color: var(--text-color);
  font-size: 0.8rem;
  font-weight: bold;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
}
</style>
