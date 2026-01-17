-- 1. Reset ALL policies on 'orders'
DROP POLICY IF EXISTS "Anyone can insert orders" ON orders;
DROP POLICY IF EXISTS "Enable insert for anon" ON orders;
DROP POLICY IF EXISTS "Authenticated users can view all orders" ON orders;
DROP POLICY IF EXISTS "Admins can view all orders" ON orders;
DROP POLICY IF EXISTS "Admins can update orders" ON orders;

-- 2. Force Enable RLS
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- 3. KEY STEP: Grant Usage on Schema and Table to 'anon' (the role used by your API key)
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON TABLE public.orders TO anon, authenticated;

-- 4. Create the INSERT policy specifically for 'anon' role
CREATE POLICY "Enable insert for anon"
ON public.orders
FOR INSERT
TO anon
WITH CHECK (true);

-- 5. Create policies for Admins (Authenticated users)
CREATE POLICY "Enable select for authenticated"
ON public.orders
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Enable update for authenticated"
ON public.orders
FOR UPDATE
TO authenticated
USING (true);

-- 6. Verify grants (Optional output, just for ensuring it ran)
select * from information_schema.role_table_grants where table_name = 'orders';
