<template>
  <nav class="navbar">
    <div class="container navbar-content">
      <div class="logo">
        <router-link to="/">Daharloka</router-link>
      </div>
      <ul class="nav-links" :class="{ 'active': isMenuOpen }">
        <li><a href="#hero" @click.prevent="handleNav('#hero')">Beranda</a></li>
        <li><a href="#menu" @click.prevent="handleNav('#menu')">Menu</a></li>
        <li><a href="#about" @click.prevent="handleNav('#about')">Tentang Kami</a></li>
        <li><a href="#contact" @click.prevent="handleNav('#contact')">Kontak</a></li>
      </ul>
      <div class="menu-toggle" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const isMenuOpen = ref(false);
const router = useRouter();
const route = useRoute();

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleNav = async (hash) => {
  isMenuOpen.value = false; // Close menu on mobile
  
  if (route.name !== 'home') {
    await router.push('/');
    // Wait for DOM update/navigation
    setTimeout(() => {
      scrollToSection(hash);
    }, 100);
  } else {
    scrollToSection(hash);
  }
};

const scrollToSection = (hash) => {
  const element = document.querySelector(hash);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.navbar {
  background-color: var(--white);
  padding: 15px 0;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--primary-color);
  font-weight: 800;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-links a {
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: var(--primary-color);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: var(--text-color);
  transition: 0.3s;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: var(--white);
    flex-direction: column;
    padding: 20px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    transform: translateY(-200%); /* Hidden by default */
    transition: transform 0.3s ease-in-out;
  }

  .nav-links.active {
    transform: translateY(0);
  }
}
</style>
