import { BarChart3, Plus, History, TrendingUp, Home } from 'lucide-react'

export default function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dasbor', icon: Home },
    { id: 'add-transaction', label: 'Tambah Transaksi', icon: Plus },
    { id: 'history', label: 'Riwayat', icon: History },
    { id: 'analytics', label: 'Analisis', icon: TrendingUp },
  ]

  return (
    <aside className="w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-white shadow-lg">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <BarChart3 size={32} className="text-sky-400" />
          <h1 className="text-2xl font-bold">FinTrack</h1>
        </div>
        
        <nav className="space-y-2">
          {menuItems.map(item => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeTab === item.id
                    ? 'bg-sky-500 text-white shadow-lg'
                    : 'text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            )
          })}
        </nav>
      </div>

      <div className="absolute bottom-0 w-64 p-6 border-t border-slate-700">
        <p className="text-xs text-slate-400">© 2024 FinTrack Indonesia</p>
      </div>
    </aside>
  )
}
