<template>
  <section class="contact-section" id="contact">
    <div class="container">
      <div class="section-title">
        <h2>Kunjungi <span class="highlight">Kami</span></h2>
        <p>Kami menantikan kehadiran Anda di Daharloka.</p>
      </div>
      
      <div class="contact-grid">
        <div class="contact-item">
          <h3>Lokasi</h3>
          <p>Perum ITS, SURABAYA</p>
        </div>
        <div class="contact-item">
          <h3>Jam Buka</h3>
          <p>Made by order</p>
        </div>
        <div class="contact-item">
          <h3>Hubungi Kami</h3>
          <p>IG: @daharloka_</p>
          <p>WA: +62 881-0361-10236</p>
          <p>Email: daharloka2024@gmail.com</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 80px 0;
  background-color: var(--white);
}

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

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  text-align: center;
}

.contact-item {
  padding: 30px;
  background: var(--background-color);
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.contact-item h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--primary-color);
}

.contact-item p {
  color: #555;
  margin-bottom: 8px;
}
</style>
