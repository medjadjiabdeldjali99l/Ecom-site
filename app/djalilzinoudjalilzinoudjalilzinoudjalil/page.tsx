import { createClient as createAdminClient } from '@supabase/supabase-js'
import { Order } from '@/types/database.types'
import { Suspense } from 'react'

async function OrdersTable() {
  const supabase = createAdminClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { data: orders, error } = await supabase
    .from('orders')
    .select('*')
    .order('created_at', { ascending: false })


  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg">
        Erreur lors du chargement des commandes : {error.message}
      </div>
    )
  }

  console.log(orders)
  if (!orders || orders.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
        <p className="text-gray-500 text-lg">Aucune commande trouvée.</p>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-100">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-50 border-b border-gray-100">
          <tr>
            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Date</th>
            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Client</th>
            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Téléphone</th>
            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Localisation</th>
            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Produit</th>
            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Méthode</th>
            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Total</th>
            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Statut</th>
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
                {order.product_model || 'Standard'}
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
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                  order.status === 'delivered' ? 'bg-green-100 text-green-700' :
                  order.status === 'cancelled' ? 'bg-red-100 text-red-700' :
                  order.status === 'shipped' ? 'bg-blue-100 text-blue-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function LoadingSkeleton() {
  return (
    <div className="w-full animate-pulse space-y-4">
      <div className="h-10 bg-gray-100 rounded-lg w-full"></div>
      {[...Array(5)].map((_, i) => (
        <div key={i} className="h-20 bg-gray-50 rounded-lg w-full"></div>
      ))}
    </div>
  )
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50/50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard Commandes</h1>
            <p className="text-gray-500 mt-1">Gérez vos commandes clients en temps réel</p>
          </div>
          <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm text-sm font-medium text-gray-600">
            Djalil Dashboard
          </div>
        </header>

        <Suspense fallback={<LoadingSkeleton />}>
          <OrdersTable />
        </Suspense>
      </div>
    </div>
  )
}
