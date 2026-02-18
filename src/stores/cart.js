import { reactive, computed } from 'vue';

const cart = reactive({
  items: [],
  isOpen: false
});

export const useCart = () => {
  
  // Add item to cart or update quantity if it already exists
  const addToCart = (product, quantity = 1) => {
    const existingItem = cart.items.find(item => item.name === product.name);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ ...product, quantity });
    }
    // Open cart automatically when adding item (optional, good UX)
    cart.isOpen = true;
  };

  // Remove item completely
  const removeFromCart = (index) => {
    cart.items.splice(index, 1);
  };

  // Update quantity directly
  const updateQuantity = (index, change) => {
    const item = cart.items[index];
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(index);
    }
  };

  // Calculate total price
  const totalPrice = computed(() => {
    return cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  });

  // Calculate total items count
  const totalItems = computed(() => {
    return cart.items.reduce((total, item) => total + item.quantity, 0);
  });

  // Toggle cart drawer
  const toggleCart = () => {
    cart.isOpen = !cart.isOpen;
  };

  // Generate WhatsApp Link
  const checkoutWhatsApp = () => {
    const phoneNumber = '62881036110236';
    let message = 'Halo, saya mau pesan:\n';
    
    cart.items.forEach((item, index) => {
      const subtotal = item.price * item.quantity;
      message += `${index + 1}. ${item.name} (${item.quantity}x) - @${formatPrice(item.price)} = ${formatPrice(subtotal)}\n`;
    });
    
    message += `\nTotal: ${formatPrice(totalPrice.value)}`;
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    totalPrice,
    totalItems,
    toggleCart,
    checkoutWhatsApp,
    formatPrice
  };
};
