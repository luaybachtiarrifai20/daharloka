<template>
  <div class="cart-overlay" :class="{ 'open': cart.isOpen }" @click.self="toggleCart">
    <div class="cart-drawer" :class="{ 'open': cart.isOpen }">
      <div class="cart-header">
        <h2>Keranjang Belanja</h2>
        <button class="close-btn" @click="toggleCart">&times;</button>
      </div>

      <div class="cart-items" v-if="cart.items.length > 0">
        <div v-for="(item, index) in cart.items" :key="index" class="cart-item">
          <div class="item-info">
            <h4>{{ item.name }}</h4>
            <p>{{ formatPrice(item.price) }}</p>
          </div>
          <div class="item-controls">
            <button class="qty-btn" @click="updateQuantity(index, -1)">-</button>
            <span class="qty">{{ item.quantity }}</span>
            <button class="qty-btn" @click="updateQuantity(index, 1)">+</button>
          </div>
          <div class="item-subtotal">
            {{ formatPrice(item.price * item.quantity) }}
          </div>
        </div>
      </div>

      <div class="empty-cart" v-else>
        <p>Keranjang Anda kosong.</p>
        <button class="btn" @click="toggleCart">Mulai Belanja</button>
      </div>

      <div class="cart-footer" v-if="cart.items.length > 0">
        <div class="total-section">
          <span>Total:</span>
          <span class="total-price">{{ formatPrice(totalPrice) }}</span>
        </div>
        <button class="btn btn-block btn-whatsapp" @click="checkoutWhatsApp">
          Pesan via WhatsApp
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCart } from '@/stores/cart';

const { cart, toggleCart, updateQuantity, totalPrice, checkoutWhatsApp, formatPrice } = useCart();
</script>

<style scoped>
.cart-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
}

.cart-overlay.open {
  opacity: 1;
  visibility: visible;
}

.cart-drawer {
  position: absolute;
  top: 0;
  right: -100%;
  width: 100%;
  max-width: 400px;
  height: 100%;
  background: var(--white);
  box-shadow: -5px 0 15px rgba(0,0,0,0.1);
  transition: right 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
}

.cart-drawer.open {
  right: 0;
}

.cart-header {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-header h2 {
  font-size: 1.5rem;
  color: var(--text-color);
}

.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  line-height: 1;
}

.cart-items {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #f9f9f9;
  padding-bottom: 15px;
}

.item-info {
  flex: 1;
}

.item-info h4 {
  font-size: 1rem;
  margin-bottom: 5px;
  color: var(--text-color);
}

.item-controls {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 15px;
}

.qty-btn {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid #ddd;
  background: var(--white);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.qty-btn:hover {
  background: var(--background-color);
}

.item-subtotal {
  font-weight: 700;
  color: var(--primary-color);
  font-size: 0.9rem;
}

.empty-cart {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: #888;
}

.cart-footer {
  padding: 20px;
  border-top: 1px solid #eee;
  background: var(--background-color);
}

.total-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 1.2rem;
  font-weight: 700;
}

.total-price {
  color: var(--primary-color);
}

.btn-block {
  width: 100%;
  display: block;
  text-align: center;
}

.btn-whatsapp {
  background-color: var(--accent-color); /* Hijau Tua */
  color: white;
}

.btn-whatsapp:hover {
  filter: brightness(1.1); /* Slightly lighter on hover */
}
</style>
