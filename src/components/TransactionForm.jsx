import { useState } from 'react'
import { Send } from 'lucide-react'

const categories = {
  income: ['Penjualan', 'Investasi', 'Bunga Bank', 'Lainnya'],
  expense: ['Gaji Karyawan', 'Sewa', 'Utilitas', 'Marketing', 'Bahan Baku', 'Transportasi', 'Lainnya']
}

export default function TransactionForm({ onAddTransaction }) {
  const [type, setType] = useState('expense')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!amount || !category || !description) {
      alert('Mohon isi semua field')
      return
    }

    onAddTransaction({
      type,
      amount: parseFloat(amount),
      category,
      description
    })

    setAmount('')
    setCategory('')
    setDescription('')
    setSubmitted(true)

    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Tambah Transaksi</h1>
        <p className="text-slate-600">Catat transaksi keuangan bisnis Anda</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8 space-y-6">
          
          {submitted && (
            <div className="bg-success/20 border border-success text-success px-4 py-3 rounded-lg">
              ✓ Transaksi berhasil ditambahkan!
            </div>
          )}

          <div>
            <label className="block text-sm font-bold text-slate-900 mb-3">Tipe Transaksi</label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setType('expense')}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${type === 'expense' ? 'bg-danger text-white shadow-lg' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              >
                Pengeluaran
              </button>
              <button
                type="button"
                onClick={() => setType('income')}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${type === 'income' ? 'bg-success text-white shadow-lg' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              >
                Pendapatan
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="amount" className="block text-sm font-bold text-slate-900 mb-2">Jumlah (Rp)</label>
            <input id="amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-bold text-slate-900 mb-2">Kategori</label>
            <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option value="">-- Pilih Kategori --</option>
              {categories[type].map(cat => (<option key={cat} value={cat}>{cat}</option>))}
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-bold text-slate-900 mb-2">Keterangan</label>
            <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Masukkan keterangan transaksi..." rows="4" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none" />
          </div>

          <button type="submit" className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold py-3 px-4 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2">
            <Send size={20} />
            Simpan Transaksi
          </button>
        </form>
      </div>
    </div>
  )
}
