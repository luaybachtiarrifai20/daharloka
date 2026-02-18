<template>
  <section class="menu-section" id="menu">
    <div class="container">
      <div class="section-title">
        <h2>Menu <span class="highlight">Favorit</span></h2>
        <p>Pilihan hidangan terbaik untuk menemani momen spesial Anda.</p>
      </div>
      
      <div class="menu-grid">
        <div v-for="category in menuCategories" :key="category.id" class="menu-item" @click="goToDetail(category.id)">
          <div class="image-wrapper">
            <img :src="category.image" :alt="category.name" loading="lazy">
          </div>
          <div class="menu-info">
            <h3>{{ category.name }}</h3>
            <p class="description">{{ category.description }}</p>
            <button class="btn btn-sm">Lihat Menu</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { menuCategories } from '@/data/menu';

const router = useRouter();

const goToDetail = (id) => {
  router.push({ name: 'menu-detail', params: { id } });
};
</script>

<style scoped>
.menu-section {
  padding: 80px 0;
  background-color: var(--background-color);
}

/* ... */

.section-title {
  text-align: center;
  margin-bottom: 50px;
}

.section-title h2 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: var(--text-color);
}

.highlight {
  color: var(--primary-color);
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}

.menu-item {
  background: var(--white);
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  cursor: pointer;
}

.menu-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.image-wrapper {
  height: 200px;
  overflow: hidden;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.menu-item:hover .image-wrapper img {
  transform: scale(1.1);
}

.menu-info {
  padding: 20px;
  text-align: center;
}

.menu-info h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: var(--text-color);
}

.description {
  color: #555;
  font-size: 0.9rem;
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.btn-sm {
  font-size: 0.9rem;
  padding: 8px 20px;
}
</style>
