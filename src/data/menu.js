// Import images directly to ensure Vite processes them correctly
import img1 from '@/assets/images/IMG-20260217-WA0018.jpg';
import img2 from '@/assets/images/IMG-20260217-WA0019.jpg';
import img3 from '@/assets/images/IMG-20260217-WA0020.jpg';
import img4 from '@/assets/images/IMG-20260217-WA0021.jpg';
import img5 from '@/assets/images/IMG-20260217-WA0022.jpg';
import img6 from '@/assets/images/IMG-20260217-WA0023.jpg';
// Import additional images for variety
import img7 from '@/assets/images/IMG-20260217-WA0024.jpg';
import img8 from '@/assets/images/IMG-20260217-WA0025.jpg';
import img9 from '@/assets/images/IMG-20260217-WA0026.jpg';
import img10 from '@/assets/images/IMG-20260217-WA0027.jpg';
import img11 from '@/assets/images/IMG-20260217-WA0028.jpg';
import img12 from '@/assets/images/IMG-20260217-WA0029.jpg';

// Define categories with specific items as requested
export const menuCategories = [
  {
    id: 'pempek',
    name: 'Aneka Pempek',
    image: img1,
    description: 'Pempek asli Palembang dengan cuko yang mantap.',
    items: [
      { name: 'Pempek Kapal Selam Besar (1pcs)', price: 25500 },
      { name: 'Pempek Kapal Selam Kecil (10pcs)', price: 35500 },
      { name: 'Pempek Lenjer Besar (1pcs)', price: 35500 },
      { name: 'Pempek Lenjer Kecil (10pcs)', price: 35500 },
      { name: 'Pempek Adaan (10pcs)', price: 35500 },
      { name: 'Pempek Kulit (10pcs)', price: 35500 },
      { name: 'Pempek Crispy (10pcs)', price: 35500 },
      { name: 'Pempek Keju Lumer (5pcs)', price: 32500 },
      { name: 'Pempek Keju Lumer (10pcs)', price: 42500 },
    ]
  },
  {
    id: 'camilan',
    name: 'Camilan & Snack',
    image: img2,
    description: 'Pilihan camilan lezat: Pempek Mix, Tekwan, dan Otak-otak.',
    groups: [
      {
        name: 'Pempek Mix',
        items: [
          { name: 'Pempek Kapal Selam dan Lenjer Besar', price: 57000 },
          { name: 'Pempek Mix isi 10pcs', price: 35500 },
          { name: 'Pempek Mix isi 20pcs', price: 68500 },
          { name: 'Pempek Mix isi 50pcs', price: 125000 },
        ]
      },
      {
        name: 'Tekwan',
        items: [
          { name: 'Tekwan isi 10pcs', price: 32500 },
          { name: 'Tekwan 1/2 Kg', price: 71500 },
          { name: 'Tekwan 1 Kg', price: 110500 },
        ]
      },
      {
        name: 'Otak-otak',
        items: [
          { name: 'Ori Bumbu Kacang (8pcs)', price: 35000 },
          { name: 'Ori Kuah Cuko (8pcs)', price: 35000 },
          { name: 'Keju Bumbu Kacang (8pcs)', price: 45000 },
          { name: 'Keju Kuah Cuko (8pcs)', price: 45000 },
        ]
      }
    ]
  },
  {
    id: 'camilan-2',
    name: 'Siomay & Dimsum',
    image: img12,
    description: 'Siomay ikan tenggiri asli dan aneka dimsum premium.',
    groups: [
      {
        name: 'Siomay Ikan',
        items: [
          { name: 'Siomay Ikan Bumbu Kacang', price: 27000 },
        ]
      },
      {
        name: 'Dimsum',
        items: [
          { name: 'Dimsum Siomay Ayam (4pcs)', price: 12000 },
          { name: 'Dimsum Siomay Keju (4pcs)', price: 12000 },
          { name: 'Dimsum Siomay Jamur (4pcs)', price: 12000 },
          { name: 'Dimsum Siomay Mix (4pcs)', price: 12000 },
          { name: 'Dimsum Siomay Udang (3pcs)', price: 12000 },
          { name: 'Dimsum Siomay Moza (3pcs)', price: 12000 },
          { name: 'Dimsum Pangsit Kepiting (3pcs)', price: 12000 },
          { name: 'Dimsum Udang Rambutan (3pcs)', price: 12000 },
          { name: 'Dimsum Udang Tempura (3pcs)', price: 12000 },
          { name: 'Dimsum Bola Keju (3pcs)', price: 12000 },
          { name: 'Dimsum Keju Lumer (2pcs)', price: 13000 },
          { name: 'Dimsum Keju Lumer (5pcs)', price: 30000 },
          { name: 'Dimsum Keju Lumer (10pcs)', price: 60000 },
        ]
      }
    ]
  },
  {
    id: 'camilan-3',
    name: 'Tahu Bakso & Risoles',
    image: img5,
    description: 'Gorengan premium yang cocok untuk takjil atau camilan.',
    groups: [
      {
        name: 'Tahu Bakso',
        items: [
          { name: 'Tahu Bakso Toping Ori (3pcs)', price: 12000 },
          { name: 'Tahu Bakso Toping Keju (3pcs)', price: 12000 },
          { name: 'Tahu Bakso Toping Pedas (3pcs)', price: 12000 },
          { name: 'Tahu Bakso Toping Jamur (3pcs)', price: 12000 },
          { name: 'Tahu Bakso Toping Mix (3pcs)', price: 12000 },
        ]
      },
      {
        name: 'Risoles',
        items: [
          { name: 'Risoles (1pcs)', price: 6000 },
          { name: 'Risoles (5pcs)', price: 24500 },
          { name: 'Risoles (10pcs)', price: 48000 },
        ]
      }
    ]
  },
  {
    id: 'makanan-utama',
    name: 'Makanan Utama',
    image: img3,
    description: 'Hidangan utama yang mengenyangkan dan lezat.',
    groups: [
      {
        name: 'Nasi Goreng dan Spageti',
        items: [
          { name: 'Nasi Goreng', price: 10000 },
          { name: 'Nasi Goreng Telur Dadar', price: 12000 },
          { name: 'Nasi Goreng Telur Ceplok', price: 12000 },
          { name: 'Nasi Goreng Ayam Katsu', price: 17000 },
          { name: 'Nasi Goreng Ayam Geprek', price: 17000 },
          { name: 'Spageti', price: 12000 },
          { name: 'Spageti Ayam Katsu', price: 19000 },
          
        ]
      },
      {
        name: 'Lauk',
        items: [
          { name: 'Tahu', price: 2000 },
          { name: 'Tempe', price: 2000 },
          { name: 'Telur Dadar', price: 5000 },
          { name: 'Telur Ceplok', price: 5000 },
          { name: 'Ayam Katsu Ori', price: 10000 },
          { name: 'Ayam Katsu ori Saus Blackpepper', price: 12000 }, 
          { name: 'Ayam Katsu ori Saus Barbeque', price: 12000 }, 
          { name: 'Ayam Geprek Ori', price: 10000 },
        ]
      }
    ]
  },
  {
    id: 'makanan-utama-2',
    name: 'Makanan Utama',
    image: img4,
    description: 'Hidangan utama yang mengenyangkan dan lezat.',
    groups: [
      {
        name: 'Nasi dan Lauk',
        items: [
          { name: 'Nasi Ayam Katsu Original', price: 15000 },
          { name: 'Nasi Ayam Katsu Saus Blackpepper', price: 17000 },
          { name: 'Nasi Ayam Katsu Saus Barbeque', price: 17000 },
          { name: 'Nasi Ayam Geprek', price: 15000 },
          { name: 'Nasi Ayam Geprek Komplit', price: 17000 },
          { name: 'Nasi Ayam Goreng Ungkep', price: 15000 },
          { name: 'Nasi Ayam Goreng Ungkep Komplit', price: 17000 },
          { name: 'Nasi Tahu Tempe', price: 10000 },
          { name: 'Nasi Telur', price: 10000 },
          { name: 'Nasi Tahu Tempe Telur', price: 12000 },
        ]
      },
    ]
  },
  {
    id: 'paket-hemat-buka',
    name: 'Paket Hemat Buka Puasa',
    image: img8,
    description: 'Pilihan tepat untuk makan enak dan hemat saat berbuka puasa.',
    groups: [
      {
        name: 'Paket Hemat Buka Puasa',
        items: [
          { name: 'Paket Dahar 1 (Nasi Ayam Katsu + Es Teh)', price: 17000 },
          { name: 'Paket Dahar 2 (Nasi Ayam Geprek Komplit + Es Teh)', price: 18000 },
          { name: 'Paket Dahar 3 (Nasi Ayam Goreng Telur + Es Teh)', price: 14000 },
          { name: 'Paket Dahar 4 (Nasi Ayam Goreng Komplit + Es Teh)', price: 19000 },
        ]
      }
    ]
  },
  {
    id: 'frozen-food',
    name: 'Frozen Food',
    image: img6,
    description: 'Makanan beku yang bisa disimpan dan dihangatkan kapan saja.',
    groups: [
      {
        name: 'Tahu Bakso',
        items: [
          { name: 'Tahu Bakso Topping Ori (20pcs/pack)', price: 60000 },
          { name: 'Tahu Bakso Topping Keju (20pcs/pack)', price: 60000 },
          { name: 'Tahu Bakso Topping Jamur (20pcs/pack)', price: 60000 },
          { name: 'Tahu Bakso Topping Pedas (20pcs/pack)', price: 60000 },
          { name: 'Tahu Bakso Topping Mix (20pcs/pack)', price: 60000 },
        ]
      },
      {
        name: 'Risoles',
        items: [
          { name: 'Risoles Mayo (10pcs/pack)', price: 40000 },
          { name: 'Risoles Mentai (10pcs/pack)', price: 40000 },
          { name: 'Risoles Ayam Pedas (10pcs/pack)', price: 40000 },
          { name: 'Risoles Beef (10pcs/pack)', price: 40000 },
        ]
      }
    ]
  },
  {
    id: 'frozen-food-2',
    name: 'Frozen Food',
    image: img7,
    description: 'Makanan beku yang bisa disimpan dan dihangatkan kapan saja.',
    groups: [
      {
        name: 'Dimsum',
        items: [
          { name: 'Dimsum Siomay Ayam (40pcs/pack)', price: 65000 },
          { name: 'Dimsum Siomay Keju (40pcs/pack)', price: 65000 },
          { name: 'Dimsum Siomay Jamur (40pcs/pack)', price: 65000 },
          { name: 'Dimsum Siomay Udang (40pcs/pack)', price: 77000 },
          { name: 'Dimsum Siomay Moza (40pcs/pack)', price: 77000 },
          { name: 'Dimsum Pangsit Kepiting (30pcs/pack)', price: 77000 },
          { name: 'Dimsum Udang Rambutan (30pcs/pack)', price: 65000 },
          { name: 'Dimsum Udang Tempura (30pcs/pack)', price: 77000 },
          { name: 'Dimsum Bola Keju (30pcs/pack)', price: 65000 },
          { name: 'Dimsum Keju Lumer (10pcs/pack)', price: 55000 },
        ]
      },
    ]
  }
];
