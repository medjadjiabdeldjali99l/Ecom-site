# 🗄️ Supabase Database Setup

## Step 1: Create the Orders Table

Go to your Supabase project → **SQL Editor** → **New query**, then run this SQL:

```sql
-- Create the orders table
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Customer Information
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  
  -- Delivery Address
  wilaya_code TEXT NOT NULL,
  wilaya_name TEXT NOT NULL,
  commune TEXT NOT NULL,
  
  -- Delivery Details
  delivery_method TEXT NOT NULL CHECK (delivery_method IN ('home', 'bureau')),
  delivery_price INTEGER NOT NULL,
  
  -- Pricing
  product_price INTEGER NOT NULL,
  total_price INTEGER NOT NULL,
  
  -- Order Status
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'shipped', 'delivered', 'cancelled')),
  
  -- Admin Notes
  admin_notes TEXT,
  
  -- Metadata
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_orders_created_at ON orders(created_at DESC);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_phone ON orders(phone);

-- Function to auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to call the function on UPDATE
CREATE TRIGGER update_orders_updated_at
    BEFORE UPDATE ON orders
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
```

## Step 2: Configure Row Level Security (RLS)

Run this SQL to set up security policies:

```sql
-- Enable Row Level Security
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Policy 1: Allow anyone to insert orders (for customer submissions)
CREATE POLICY "Anyone can insert orders"
ON orders FOR INSERT
TO anon
WITH CHECK (true);

-- Policy 2: Only authenticated users can view orders (for admin dashboard)
CREATE POLICY "Authenticated users can view all orders"
ON orders FOR SELECT
TO authenticated
USING (true);

-- Policy 3: Only authenticated users can update orders (for admin)
CREATE POLICY "Authenticated users can update orders"
ON orders FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);
```

## Step 3: Create Admin User

1. Go to **Authentication** → **Users**
2. Click **"Add user"** → **"Create new user"**
3. Fill in:
   - **Email**: your-admin-email@example.com
   - **Password**: Choose a strong password
   - **Auto Confirm User**: ✅ Check this box
4. Click **"Create user"**

## Step 4: Get Your API Keys

1. Go to **Settings** → **API**
2. Copy these values:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public key**: The long key under "Project API keys"
   - **service_role key**: Click "Reveal" to see it

## Step 5: Configure .env.local

Create a file named `.env.local` in your project root and add:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
NEXT_PUBLIC_PRODUCT_PRICE=3500
```

Replace the placeholder values with your actual Supabase credentials.

## ✅ Verification

After running the SQL:
1. Go to **Table Editor** → You should see the `orders` table
2. Click on the table → Go to **Policies** tab → You should see 3 policies
3. Go to **Authentication** → **Users** → You should see your admin user

## 🔒 Security Notes

- Never commit `.env.local` to Git (it's already in `.gitignore`)
- The `service_role` key has admin privileges - keep it secret!
- The `anon` key is safe to use in client-side code
