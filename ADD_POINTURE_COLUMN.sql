-- Add pointure column to orders table
ALTER TABLE orders 
ADD COLUMN pointure TEXT;

-- Document the column
COMMENT ON COLUMN orders.pointure IS 'Selected shoe size (pointure) variant of the product, e.g. 36, 37, 38, 39, 40, 41';
