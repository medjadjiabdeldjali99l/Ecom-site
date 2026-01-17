-- Add product_model column to orders table
ALTER TABLE orders 
ADD COLUMN product_model TEXT;

-- Update the comments if you want to document it
COMMENT ON COLUMN orders.product_model IS 'Selected color or model variant of the product';
