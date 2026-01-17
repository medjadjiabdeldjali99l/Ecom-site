# Ultra-Premium Landing Page

This is a Next.js-based single product landing page designed for the Algerian e-commerce market.

## Features

- 🎨 **Classy & Minimalist Design** - Beige cream background with forest green accents
- 🇩🇿 **Algerian Market Ready** - Complete database of 58 wilayas and communes
- 💰 **Dynamic Pricing** - Automatic price calculation based on wilaya and delivery method
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile
- ✨ **Premium UI/UX** - Smooth transitions, elegant typography, and interactive elements
- 🚚 **Flexible Delivery** - Home delivery or bureau pickup options

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Replace Product Images

Edit the `PRODUCT_IMAGES` array in `app/page.tsx`:

```typescript
const PRODUCT_IMAGES = [
  "/path/to/your/image1.jpg",
  "/path/to/your/image2.jpg",
  // Add more images...
];
```

### Update Product Price

Edit `BASE_PRODUCT_PRICE` in `data/algeria-data.ts`:

```typescript
export const BASE_PRODUCT_PRICE = 5000; // Your price in DZD
```

### Customize Delivery Pricing

Modify the `DELIVERY_PRICING` array in `data/algeria-data.ts` to set custom prices per wilaya.

### Update Instagram Link

Edit the Instagram URL in `app/success/page.tsx`:

```typescript
href="https://www.instagram.com/your-account/"
```

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **Fonts**: Playfair Display (serif) + Inter (sans-serif)

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main landing page
│   ├── success/
│   │   └── page.tsx        # Success page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── ImageGallery.tsx    # Product image gallery
│   └── OrderForm.tsx       # Order form with validation
├── data/
│   └── algeria-data.ts     # Wilayas, communes, and pricing
└── types/
    └── types.ts            # TypeScript interfaces
```

## License

MIT
