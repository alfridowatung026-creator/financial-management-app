import { useState } from 'react'
import { Trash2, Filter } from 'lucide-react'

export default function TransactionHistory({ transactions, onDelete }) {
  const [filterType, setFilterType] = useState('all')
  const [filterCategory, setFilterCategory] = useState('all')

  const categories = new Set(transactions.map(t => t.category))

  const filteredTransactions = transactions.filter(t => {
    const typeMatch = filterType === 'all' || t.type === filterType
    const categoryMatch = filterCategory === 'all' || t.category === filterCategory
    return typeMatch && categoryMatch
  })

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(value)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Riwayat Transaksi</h1>
        <p className="text-slate-600">Kelola semua transaksi keuangan Anda</p>
      </div>

      {/* Filter */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center gap-2 mb-4">
          <Filter size={20} className="text-slate-700" />
          <h3 className="font-bold text-slate-900">Filter</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Tipe Transaksi</label>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">Semua</option>
              <option value="income">Pendapatan</option>
              <option value="expense">Pengeluaran</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Kategori</label>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">Semua</option>
              {Array.from(categories).map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Tabel Transaksi */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {filteredTransactions.length === 0 ? (
          <div className="p-8 text-center text-slate-500">
            Tidak ada transaksi yang sesuai dengan filter
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Tanggal</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Keterangan</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Kategori</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Tipe</th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-slate-900">Jumlah</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-slate-900">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map(transaction => (
                  <tr key={transaction.id} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {new Date(transaction.date).toLocaleDateString('id-ID')}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">
                      {transaction.description}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {transaction.category}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        transaction.type === 'income'
                          ? 'bg-success/20 text-success'
                          : 'bg-danger/20 text-danger'
                      }`}>
                        {transaction.type === 'income' ? 'Pendapatan' : 'Pengeluaran'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-right font-bold">
                      <span className={transaction.type === 'income' ? 'text-success' : 'text-danger'}>
                        {transaction.type === 'income' ? '+' : '-'} {formatCurrency(transaction.amount)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => onDelete(transaction.id)}
                        className="text-danger hover:bg-danger/10 p-2 rounded-lg transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
