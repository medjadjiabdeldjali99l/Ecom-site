import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'

// Read .env.local manually to avoid dependencies
const envPath = path.join(process.cwd(), '.env.local')
const envContent = fs.readFileSync(envPath, 'utf-8')

const env: Record<string, string> = {}
envContent.split('\n').forEach(line => {
  const [key, value] = line.split('=')
  if (key && value) {
    env[key.trim()] = value.trim()
  }
})

const supabaseUrl = env['NEXT_PUBLIC_SUPABASE_URL']
const supabaseAnonKey = env['NEXT_PUBLIC_SUPABASE_ANON_KEY']

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing Supabase credentials in .env.local')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function testInsert() {
  console.log('🔄 Testing connection to:', supabaseUrl)
  console.log('🔄 Attempting to insert a test order...')

  const testOrder = {
    full_name: 'Test Automatic Verification',
    phone: '0555000000',
    wilaya_code: '16',
    wilaya_name: 'Alger',
    commune: 'Test Commune',
    delivery_method: 'home',
    delivery_price: 1000,
    product_price: 1000,
    total_price: 2000,
    status: 'pending'
  }

  const { data, error } = await supabase
    .from('orders')
    .insert([testOrder])
    .select()

  if (error) {
    console.error('❌ Error inserting order:', error.message)
    console.error('details:', error)
  } else {
    console.log('✅ Success! Order inserted successfully.')
    console.log('Inserted Order ID:', data[0].id)
    console.log('This confirms that the RLS policy is correctly configured for public inserts.')
  }
}

testInsert()
