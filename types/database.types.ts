export interface Order {
  id: string
  created_at: string
  full_name: string
  phone: string
  wilaya_code: string
  wilaya_name: string
  commune: string
  delivery_method: 'home' | 'bureau'
  delivery_price: number
  product_price: number
  total_price: number
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'
  admin_notes: string | null
  product_model?: string | null
  pointure?: string | null
  updated_at: string
}

export interface CreateOrderData {
  full_name: string
  phone: string
  wilaya_code: string
  wilaya_name: string
  commune: string
  delivery_method: 'home' | 'bureau'
  delivery_price: number
  product_price: number
  total_price: number
  product_model?: string
  pointure?: string
}

export interface UpdateOrderData {
  status?: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'
  admin_notes?: string
}
