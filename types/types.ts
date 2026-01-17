// Wilaya interface
export interface Wilaya {
  code: string;
  name: string;
  communes: string[];
}

// Pricing structure
export interface DeliveryPricing {
  wilayaCode: string;
  homeDelivery: number;
  bureauPickup: number;
}

// Product Image structure
export interface ProductImage {
  url: string;
  model: string; // e.g., "White with pink", "Red"
}

export interface CartItem {
  model: string;
  quantity: number;
}

// Order form data
export interface OrderFormData {
  fullName: string;
  phone: string;
  wilaya: string;
  commune: string;
  deliveryMethod: 'home' | 'bureau';
  productModel?: string;
}
