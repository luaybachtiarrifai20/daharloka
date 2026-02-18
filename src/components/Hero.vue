<template>
  <section class="hero" id="home">
    <div class="container hero-content">
      <div class="hero-text">
        <h1>Rasakan Kelezatan <span class="highlight">Autentik</span></h1>
        <p>Nikmati ragam hidangan spesial dengan cita rasa yang menggugah selera di Daharloka. Kami menyajikan yang terbaik untuk Anda.</p>
        <a href="#menu" class="btn">Lihat Menu</a>
      </div>
      <div class="hero-image">
        <img src="@/assets/images/IMG-20260217-WA0018.jpg" alt="Hidangan Lezat Daharloka">
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 80px 0;
  background-color: var(--background-color);
  display: flex;
  align-items: center;
  min-height: 80vh;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.hero-text h1 {
  font-size: 3.5rem;
  line-height: 1.2;
  margin-bottom: 20px;
  color: var(--text-color);
}

.highlight {
  color: var(--primary-color);
}

.hero-text p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #555;
}

.hero-image img {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  transform: rotate(3deg);
  transition: transform 0.3s;
}

.hero-image img:hover {
  transform: rotate(0);
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-text h1 {
    font-size: 2.5rem;
  }
  
  .hero-image {
    margin-top: 30px;
  }
}
</style>
