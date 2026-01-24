"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Plus, Minus, Trash2, ShoppingCart, User, Phone, MapPin, Home, Building2 } from "lucide-react";
import { WILAYAS, calculateTotalPrice, BASE_PRODUCT_PRICE } from "@/data/algeria-data";
import { CartItem, OrderFormData } from "@/types/types";

interface OrderFormProps {
  selectedModel?: string; // Kept for backward compatibility or direct selection if cart is empty
  cartItems?: CartItem[];
  onUpdateQuantity?: (model: string, delta: number) => void;
  productPrice?: number; // Dynamic product price for this page
  lang?: "fr" | "ar"; // Language prop
}

const TRANSLATIONS = {
  fr: {
    title: "Commander Maintenant",
    cartTitle: "Votre Panier",
    items: "articles",
    selectedModel: "Modèle choisi",
    selected: "Sélectionné",
    fullName: "Nom Complet",
    fullNamePlaceholder: "Entrez votre nom complet",
    phone: "Numéro de Téléphone",
    phonePlaceholder: "0555123456",
    wilaya: "Wilaya",
    wilayaPlaceholder: "Sélectionnez une wilaya",
    commune: "Commune",
    communePlaceholder: "Sélectionnez une commune",
    communeWait: "Sélectionnez d'abord une wilaya",
    deliveryMode: "Mode de Livraison",
    home: "À Domicile",
    bureau: "Au Bureau",
    productPrice: "Prix du produit",
    deliveryPrice: "Livraison",
    deliveryWait: "En attente...",
    total: "Prix Total",
    submit: "Confirmer la Commande",
    processing: "Traitement en cours...",
    errors: {
      name: "Le nom complet est requis",
      phone: "Le numéro de téléphone est requis",
      phoneFormat: "Format invalide (ex: 0555123456)",
      wilaya: "Veuillez sélectionner une wilaya",
      commune: "Veuillez sélectionner une commune"
    }
  },
  ar: {
    title: "اطلب الآن",
    cartTitle: "سلة المشتريات",
    items: "منتجات",
    selectedModel: "النوع المختار",
    selected: "تم الاختيار",
    fullName: "الاسم الكامل",
    fullNamePlaceholder: "أدخل اسمك الكامل",
    phone: "رقم الهاتف",
    phonePlaceholder: "0555123456",
    wilaya: "الولاية",
    wilayaPlaceholder: "اختر الولاية",
    commune: "البلدية",
    communePlaceholder: "اختر البلدية",
    communeWait: "يرجى اختيار الولاية أولاً",
    deliveryMode: "طريقة التوصيل",
    home: "توصيل للمنزل",
    bureau: "استلام من المكتب",
    productPrice: "سعر المنتج",
    deliveryPrice: "سعر التوصيل",
    deliveryWait: "في الانتظار...",
    total: "السعر الإجمالي",
    submit: "تأكيد الطلب",
    processing: "جاري المعالجة...",
    errors: {
      name: "يرجى إدخال الاسم الكامل",
      phone: "يرجى إدخال رقم الهاتف",
      phoneFormat: "رقم هاتف غير صحيح (مثال: 0555123456)",
      wilaya: "يرجى اختيار الولاية",
      commune: "يرجى اختيار البلدية"
    }
  }
};

export default function OrderForm({ selectedModel, cartItems = [], onUpdateQuantity, productPrice, lang = "fr" }: OrderFormProps) {
  const t = TRANSLATIONS[lang];
  const isRTL = lang === "ar";

  const router = useRouter();
  const [formData, setFormData] = useState<OrderFormData>({
    fullName: "",
    phone: "",
    wilaya: "",
    commune: "",
    deliveryMethod: "home",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof OrderFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [availableCommunes, setAvailableCommunes] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Use provided product price or fallback to BASE_PRODUCT_PRICE
  const currentProductPrice = productPrice || BASE_PRODUCT_PRICE;

  // Calculate total price based on cart items or single selection
  useEffect(() => {
    let productTotal = 0;
    
    if (cartItems.length > 0) {
      const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
      productTotal = totalQuantity * currentProductPrice;
    } else {
      productTotal = currentProductPrice; // Default single item price
    }

    if (formData.wilaya) {
      const standardTotal = calculateTotalPrice(formData.wilaya, formData.deliveryMethod);
      const deliveryCost = standardTotal - BASE_PRODUCT_PRICE;
      
      setTotalPrice(productTotal + deliveryCost);
    } else {
      setTotalPrice(productTotal);
    }
  }, [formData.wilaya, formData.deliveryMethod, cartItems, currentProductPrice]);

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof OrderFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = t.errors.name;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t.errors.phone;
    } else if (!/^(0)(5|6|7)[0-9]{8}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = t.errors.phoneFormat;
    }

    if (!formData.wilaya) {
      newErrors.wilaya = t.errors.wilaya;
    }

    if (!formData.commune) {
      newErrors.commune = t.errors.commune;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const selectedWilaya = WILAYAS.find((w) => w.code === formData.wilaya);
      const basePrice = currentProductPrice;
      
      // Calculate delivery cost
      const deliveryCost = formData.wilaya 
        ? calculateTotalPrice(formData.wilaya, formData.deliveryMethod) - BASE_PRODUCT_PRICE 
        : 0;

      // Format product models string
      let modelString = "";
      if (cartItems.length > 0) {
        modelString = cartItems
          .map(item => `${item.model} (x${item.quantity})`)
          .join(", ");
      } else if (selectedModel) {
         modelString = selectedModel;
      }

      const orderData = {
        full_name: formData.fullName,
        phone: formData.phone,
        wilaya_code: formData.wilaya,
        wilaya_name: selectedWilaya?.name || '',
        commune: formData.commune,
        delivery_method: formData.deliveryMethod,
        delivery_price: deliveryCost,
        product_price: totalPrice - deliveryCost,
        total_price: totalPrice,
        product_model: modelString,
      };

      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Erreur');

      sessionStorage.setItem('orderId', result.order.id);
      sessionStorage.setItem('orderData', JSON.stringify({
        ...formData,
        totalPrice,
        wilaya: selectedWilaya?.name || formData.wilaya,
        productModel: modelString,
      }));

      router.push('/success');
    } catch (error) {
      console.error('Error:', error);
      alert('Une erreur est survenue.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof OrderFormData, value: string) => {
    setFormData((prev) => {
      const updated = { ...prev, [field]: value };
      if (field === "wilaya") {
        updated.commune = "";
      }
      return updated;
    });

    if (field === "wilaya") {
      const selectedWilaya = WILAYAS.find((w) => w.code === value);
      setAvailableCommunes(selectedWilaya?.communes || []);
    }

    // Clear error for this field
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
      <div className={`bg-white p-6 rounded-2xl shadow-elegant-lg border border-gray-100 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-forest/10 rounded-full flex items-center justify-center">
            <ShoppingCart className="w-5 h-5 text-forest" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-forest">
            {t.title}
          </h2>
        </div>

        {/* Cart Summary or Single Selection */}
        {cartItems.length > 0 ? (
          <div className="mb-6 space-y-3">
             <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
               <span className="font-medium">{t.cartTitle}</span>
               <span>{cartItems.reduce((acc, i) => acc + i.quantity, 0)} {t.items}</span>
             </div>
             {cartItems.map((item) => (
               <div key={item.model} className="p-3 bg-cream/50 border border-gray-100 rounded-xl flex items-center justify-between">
                 <div className="flex-1">
                   <p className="font-bold text-gray-900 text-sm">{item.model}</p>
                   <p className="text-xs text-forest font-medium">{currentProductPrice.toLocaleString()} DZD</p>
                 </div>
                 
                 <div className="flex items-center gap-3 bg-white rounded-lg p-1 border border-gray-200 shadow-sm">
                   <button 
                     type="button"
                     onClick={() => onUpdateQuantity?.(item.model, -1)}
                     className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-red-500 hover:bg-red-50 rounded transition-colors"
                   >
                     {item.quantity === 1 ? <Trash2 className="w-3 h-3" /> : <Minus className="w-3 h-3" />}
                   </button>
                   <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                   <button 
                     type="button"
                     onClick={() => onUpdateQuantity?.(item.model, 1)}
                     className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-forest hover:bg-green-50 rounded transition-colors"
                   >
                     <Plus className="w-3 h-3" />
                   </button>
                 </div>
               </div>
             ))}
          </div>
        ) : selectedModel && (
          <div className="mb-6 p-4 bg-cream/50 border border-forest/20 rounded-xl flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">{t.selectedModel}</p>
              <p className="text-lg font-bold text-forest">{selectedModel}</p>
            </div>
            <span className="text-xs bg-forest text-white px-2 py-1 rounded-full">
              {t.selected}
            </span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
            <User className={`inline w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {t.fullName}
          </label>
          <input
            type="text"
            id="fullName"
            value={formData.fullName}
            onChange={(e) => handleInputChange("fullName", e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
              errors.fullName
                ? "border-red-500 focus:border-red-600"
                : "border-gray-200 focus:border-forest"
            } focus:outline-none focus:ring-2 focus:ring-forest/20`}
            placeholder={t.fullNamePlaceholder}
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            <Phone className={`inline w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {t.phone}
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
              errors.phone
                ? "border-red-500 focus:border-red-600"
                : "border-gray-200 focus:border-forest"
            } focus:outline-none focus:ring-2 focus:ring-forest/20 text-left`}
            placeholder={t.phonePlaceholder}
            dir="ltr"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>

        {/* Wilaya Selection */}
        <div>
          <label htmlFor="wilaya" className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className={`inline w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {t.wilaya}
          </label>
          <select
            id="wilaya"
            value={formData.wilaya}
            onChange={(e) => handleInputChange("wilaya", e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
              errors.wilaya
                ? "border-red-500 focus:border-red-600"
                : "border-gray-200 focus:border-forest"
            } focus:outline-none focus:ring-2 focus:ring-forest/20 bg-white`}
          >
            <option value="">{t.wilayaPlaceholder}</option>
            {WILAYAS.map((wilaya) => (
              <option key={wilaya.code} value={wilaya.code}>
                {wilaya.code} - {wilaya.name}
              </option>
            ))}
          </select>
          {errors.wilaya && (
            <p className="mt-1 text-sm text-red-600">{errors.wilaya}</p>
          )}
        </div>

        {/* Commune Selection */}
        <div>
          <label htmlFor="commune" className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className={`inline w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {t.commune}
          </label>
          <select
            id="commune"
            value={formData.commune}
            onChange={(e) => handleInputChange("commune", e.target.value)}
            disabled={!formData.wilaya}
            className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
              errors.commune
                ? "border-red-500 focus:border-red-600"
                : "border-gray-200 focus:border-forest"
            } focus:outline-none focus:ring-2 focus:ring-forest/20 bg-white disabled:bg-gray-100 disabled:cursor-not-allowed`}
          >
            <option value="">
              {formData.wilaya
                ? t.communePlaceholder
                : t.communeWait}
            </option>
            {availableCommunes.map((commune) => (
              <option key={commune} value={commune}>
                {commune}
              </option>
            ))}
          </select>
          {errors.commune && (
            <p className="mt-1 text-sm text-red-600">{errors.commune}</p>
          )}
        </div>

        {/* Delivery Method */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            {t.deliveryMode}
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => handleInputChange("deliveryMethod", "home")}
              className={`flex items-center justify-center gap-2 px-4 py-4 rounded-lg border-2 transition-all ${
                formData.deliveryMethod === "home"
                  ? "border-forest bg-forest text-white shadow-lg"
                  : "border-gray-200 hover:border-forest/50 text-gray-700"
              }`}
            >
              <Home className="w-5 h-5" />
              <span className="font-medium">{t.home}</span>
            </button>
            <button
              type="button"
              onClick={() => handleInputChange("deliveryMethod", "bureau")}
              className={`flex items-center justify-center gap-2 px-4 py-4 rounded-lg border-2 transition-all ${
                formData.deliveryMethod === "bureau"
                  ? "border-forest bg-forest text-white shadow-lg"
                  : "border-gray-200 hover:border-forest/50 text-gray-700"
              }`}
            >
              <Building2 className="w-5 h-5" />
              <span className="font-medium">{t.bureau}</span>
            </button>
          </div>
        </div>

        {/* Price Display */}
        <div className="bg-cream/50 rounded-lg p-4 border-2 border-forest/20 space-y-3">
          <div className="flex justify-between items-center text-gray-600">
            <span>{t.productPrice}:</span>
            <span className="font-medium">{currentProductPrice.toLocaleString()} DZD</span>
          </div>
          
          <div className="flex justify-between items-center text-gray-600">
            <span>{t.deliveryPrice}:</span>
            <span className="font-medium">
              {formData.wilaya 
                ? `${(calculateTotalPrice(formData.wilaya, formData.deliveryMethod) - BASE_PRODUCT_PRICE).toLocaleString()} DZD`
                : t.deliveryWait
              }
            </span>
          </div>

          <div className="border-t border-gray-200 pt-2 flex justify-between items-center text-lg">
            <span className="font-medium text-gray-700">{t.total}:</span>
            <span className="text-2xl font-serif font-bold text-forest">
              {totalPrice.toLocaleString()} DZD
            </span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-forest hover:bg-forest-dark text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>{t.processing}</span>
            </>
          ) : (
            <>
              <ShoppingCart className="w-5 h-5" />
              <span>{t.submit}</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
