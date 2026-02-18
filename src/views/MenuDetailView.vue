<template>
  <div class="menu-detail-page">
    <div class="container" v-if="category">
      <router-link to="/" class="back-link">← Kembali ke Menu</router-link>
      
      <div class="category-header">
        <div class="category-image">
          <img :src="category.image" :alt="category.name">
        </div>
        <div class="category-info">
          <h1>{{ category.name }}</h1>
          <p>{{ category.description }}</p>
        </div>
      </div>

      <!-- Render simple items list if 'items' exists -->
      <div class="items-list" v-if="category.items && category.items.length > 0">
        <div v-for="(item, index) in category.items" :key="index" class="item-card">
          <div class="item-details">
            <h3>{{ item.name }}</h3>
            <p class="price">{{ formatPrice(item.price) }}</p>
          </div>
          
          <div class="item-actions">
            <div class="qty-selector">
              <button class="qty-btn" @click="adjustQty(item, -1)" :disabled="getQty(item) <= 0">-</button>
              <span class="qty">{{ getQty(item) }}</span>
              <button class="qty-btn" @click="adjustQty(item, 1)">+</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Render grouped items list if 'groups' exists -->
      <div class="groups-list" v-if="category.groups && category.groups.length > 0">
        <div v-for="(group, gIndex) in category.groups" :key="gIndex" class="menu-group">
          <h2 class="group-title">{{ group.name }}</h2>
          <div class="items-list">
            <div v-for="(item, index) in group.items" :key="index" class="item-card">
              <div class="item-details">
                <h3>{{ item.name }}</h3>
                <p class="price">{{ formatPrice(item.price) }}</p>
              </div>
              
              <div class="item-actions">
                <div class="qty-selector">
                  <button class="qty-btn" @click="adjustQty(item, -1)" :disabled="getQty(item) <= 0">-</button>
                  <span class="qty">{{ getQty(item) }}</span>
                  <button class="qty-btn" @click="adjustQty(item, 1)">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Bulk Add Sticky Footer -->
    <div class="bulk-add-footer" v-if="totalSelectedItems > 0">
      <div class="container footer-inner">
        <div class="selection-info">
          <span class="item-count">{{ totalSelectedItems }} Item</span>
          <span class="total-price">{{ formatPrice(totalSelectedPrice) }}</span>
        </div>
        <button class="btn btn-add-bulk" @click="handleBulkAdd">
          Tambah ke Keranjang
        </button>
      </div>
    </div>
    
    <div class="container error-state" v-else>
      <h2>Kategori tidak ditemukan</h2>
      <router-link to="/" class="btn">Kembali ke Beranda</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { menuCategories } from '@/data/menu';
import { useCart } from '@/stores/cart';

const route = useRoute();
const router = useRouter();
const categoryId = route.params.id;
const { addToCart, formatPrice } = useCart();

// Local state to track quantity selection before adding to cart
const itemQuantities = reactive({});

const category = computed(() => {
  return menuCategories.find(c => c.id === categoryId);
});

const getQty = (item) => {
  return itemQuantities[item.name] || 0;
};

const adjustQty = (item, change) => {
  const current = getQty(item);
  const newValue = current + change;
  if (newValue >= 0) {
    itemQuantities[item.name] = newValue;
  }
};

const totalSelectedItems = computed(() => {
  return Object.values(itemQuantities).reduce((sum, qty) => sum + qty, 0);
});

const totalSelectedPrice = computed(() => {
  let total = 0;
  // Iterate through all items to calculate price
  if (category.value) {
    // Helper to process items
    const processItems = (items) => {
      items.forEach(item => {
        const qty = itemQuantities[item.name] || 0;
        total += item.price * qty;
      });
    };

    if (category.value.items) processItems(category.value.items);
    if (category.value.groups) {
      category.value.groups.forEach(group => processItems(group.items));
    }
  }
  return total;
});

const handleBulkAdd = () => {
  if (category.value) {
    const processItems = (items) => {
      items.forEach(item => {
        const qty = itemQuantities[item.name] || 0;
        if (qty > 0) {
          addToCart(item, qty);
          itemQuantities[item.name] = 0; // Reset after adding
        }
      });
    };

    if (category.value.items) processItems(category.value.items);
    if (category.value.groups) {
      category.value.groups.forEach(group => processItems(group.items));
    }
    
    // Optional: Open cart or show feedback
    // const { toggleCart } = useCart(); 
    // toggleCart(); 
  }
};
</script>

<style scoped>
.menu-detail-page {
  padding: 40px 0 80px;
  background-color: var(--background-color);
  min-height: 80vh;
}

.back-link {
  display: inline-block;
  margin-bottom: 20px;
  color: var(--primary-color);
  font-weight: 600;
  text-decoration: underline;
}

.category-header {
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
  background: var(--white);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  align-items: center;
}

.category-image {
  flex: 0 0 200px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
}

.category-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-info h1 {
  font-size: 2.5rem;
  color: var(--text-color);
  margin-bottom: 10px;
}

.items-list {
  display: grid;
  gap: 20px;
}

.item-card {
  background: var(--white);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  transition: transform 0.2s;
}

.item-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 10px rgba(0,0,0,0.1);
}

.item-details h3 {
  font-size: 1.1rem;
  margin-bottom: 5px;
}

.price {
  color: var(--primary-color);
  font-weight: 700;
}

.item-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.qty-selector {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f5f5f5;
  padding: 5px 10px;
  border-radius: 20px;
}

.qty-btn {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: none;
  background: var(--white);
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.qty-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.qty {
  font-weight: 600;
  min-width: 20px;
  text-align: center;
}

@media (max-width: 768px) {
  .category-header {
    flex-direction: column;
    text-align: center;
  }
  
  .category-image {
    width: 100%;
    flex: auto;
  }

  .item-card {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
  
  .item-actions {
    width: 100%;
    justify-content: center;
  }
}

.groups-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.group-title {
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--secondary-color);
}

.bulk-add-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: var(--white);
  box-shadow: 0 -5px 15px rgba(0,0,0,0.1);
  padding: 15px 0;
  z-index: 1000;
  animation: slideUp 0.3s ease-out;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.selection-info {
  display: flex;
  flex-direction: column;
}

.item-count {
  font-weight: 600;
  color: var(--text-color);
}

.total-price {
  font-weight: 700;
  color: var(--primary-color);
  font-size: 1.2rem;
}

.btn-add-bulk {
  padding: 12px 30px;
  font-size: 1.1rem;
  border-radius: 30px;
}

@keyframes slideUp {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}
</style>
