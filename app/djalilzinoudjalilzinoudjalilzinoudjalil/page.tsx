import { createClient as createAdminClient } from '@supabase/supabase-js'
import { Order } from '@/types/database.types'
import { Suspense } from 'react'
import RefreshButton from '@/components/RefreshButton'
import { ShoppingBag, TrendingUp, Users } from 'lucide-react'
import ProductFilter from '@/components/ProductFilter'
import OrderStatusActions from '@/components/OrderStatusActions'

export const dynamic = 'force-dynamic'

function StatCard({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
      <div className="p-3 bg-gray-50 rounded-lg">{icon}</div>
      <div>
        <p className="text-sm text-gray-500 font-medium">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  )
}

function LoadingSkeleton() {
  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-24 bg-gray-100 animate-pulse rounded-xl"></div>
        ))}
      </div>
      <div className="w-full animate-pulse space-y-4">
        <div className="h-10 bg-gray-100 rounded-lg w-full"></div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-20 bg-gray-50 rounded-lg w-full"></div>
        ))}
      </div>
    </div>
  )
}

async function OrdersTable({ productFilter }: { productFilter?: string }) {
  const supabase = createAdminClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  let query = supabase
    .from('orders')
    .select('*')
    .neq('status', 'cancelled')
    .order('created_at', { ascending: false })

  if (productFilter && productFilter !== 'all') {
    query = query.eq('product_name', productFilter)
  }

  const { data: orders, error } = await query

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg">
        Erreur lors du chargement des commandes : {error.message}
      </div>
    )
  }

  const totalOrders = orders?.length || 0
  const totalRevenue = orders?.reduce((sum: number, order: Order) => sum + (order.total_price || 0), 0) || 0
  const uniqueClients = new Set(orders?.map((o: Order) => o.phone)).size

  if (!orders || orders.length === 0) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard title="Total Commandes" value="0" icon={<ShoppingBag className="w-5 h-5 text-blue-600" />} />
          <StatCard title="Chiffre d'Affaires" value="0 DA" icon={<TrendingUp className="w-5 h-5 text-green-600" />} />
          <StatCard title="Clients Uniques" value="0" icon={<Users className="w-5 h-5 text-purple-600" />} />
        </div>
        <div className="text-center py-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
          <p className="text-gray-500 text-lg">Aucune commande trouvée.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Total Commandes" value={totalOrders.toString()} icon={<ShoppingBag className="w-5 h-5 text-blue-600" />} />
        <StatCard title="Chiffre d'Affaires" value={`${totalRevenue.toLocaleString()} DA`} icon={<TrendingUp className="w-5 h-5 text-green-600" />} />
        <StatCard title="Clients Uniques" value={uniqueClients.toString()} icon={<Users className="w-5 h-5 text-purple-600" />} />
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-100">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Date</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Client</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Téléphone</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Localisation</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Produit</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Variante</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Pointure</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Méthode</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Total</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Statut</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {orders.map((order: Order) => (
              <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 text-sm text-gray-500 space-y-1">
                  <div>{new Date(order.created_at).toLocaleDateString('fr-FR')}</div>
                  <div className="text-xs text-gray-400">
                    {new Date(order.created_at).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{order.full_name}</div>
                </td>
                <td className="px-6 py-4">
                  <a href={`tel:${order.phone}`} className="text-sm text-blue-600 hover:underline">
                    {order.phone}
                  </a>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  <div>{order.wilaya_name}</div>
                  <div className="text-xs text-gray-400">{order.commune}</div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  <span className="font-semibold text-forest">{order.product_name || 'Standard'}</span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 text-xs text-balance">
                  {order.product_model || '-'}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {order.pointure || '-'}
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-md ${
                    order.delivery_method === 'home' ? 'bg-purple-100 text-purple-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    {order.delivery_method === 'home' ? 'Domicile' : 'Bureau'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-bold text-gray-900">{order.total_price} DA</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`capitalize inline-flex px-2 py-1 text-[10px] font-bold rounded-full ${
                    order.status === 'delivered' ? 'bg-green-100 text-green-700' :
                    order.status === 'cancelled' ? 'bg-red-100 text-red-700' :
                    order.status === 'confirmed' ? 'bg-teal-100 text-teal-700' :
                    order.status === 'shipped' ? 'bg-blue-100 text-blue-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <OrderStatusActions orderId={order.id} currentStatus={order.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default async function DashboardPage({ 
  searchParams 
}: { 
  searchParams: Promise<{ product?: string }> 
}) {
  const { product: productFilter } = await searchParams;

  return (
    <div className="min-h-screen bg-gray-50/50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard Commandes</h1>
            <p className="text-gray-500 mt-1">Gérez vos commandes clients en temps réel</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <ProductFilter />
            <div className="flex items-center gap-3">
              <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm text-sm font-medium text-gray-600">
                Djalil Dashboard
              </div>
              <RefreshButton />
            </div>
          </div>
        </header>

        <Suspense key={productFilter || 'all'} fallback={<LoadingSkeleton />}>
          <OrdersTable productFilter={productFilter} />
        </Suspense>
      </div>
    </div>
  )
}
