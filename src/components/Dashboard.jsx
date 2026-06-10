import { ArrowUpRight, ArrowDownLeft, TrendingUp, Wallet } from 'lucide-react'

export default function Dashboard({ transactions }) {
  const calculateTotals = () => {
    let income = 0
    let expense = 0

    transactions.forEach(t => {
      const amount = parseFloat(t.amount) || 0
      if (t.type === 'income') {
        income += amount
      } else {
        expense += amount
      }
    })

    return { income, expense, balance: income - expense }
  }

  const { income, expense, balance } = calculateTotals()

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(value)
  }

  const recentTransactions = transactions.slice(0, 5)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Dasbor Ringkasan</h1>
        <p className="text-slate-600">Pantau kesehatan keuangan bisnis Anda</p>
      </div>

      {/* Cards Ringkasan */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Pendapatan */}
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-success">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 font-medium">Total Pendapatan</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">{formatCurrency(income)}</p>
            </div>
            <div className="bg-success/20 p-3 rounded-lg">
              <ArrowUpRight size={24} className="text-success" />
            </div>
          </div>
        </div>

        {/* Total Pengeluaran */}
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-danger">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 font-medium">Total Pengeluaran</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">{formatCurrency(expense)}</p>
            </div>
            <div className="bg-danger/20 p-3 rounded-lg">
              <ArrowDownLeft size={24} className="text-danger" />
            </div>
          </div>
        </div>

        {/* Saldo */}
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-primary-600">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 font-medium">Saldo</p>
              <p className={`text-2xl font-bold mt-2 ${balance >= 0 ? 'text-success' : 'text-danger'}`}>
                {formatCurrency(balance)}
              </p>
            </div>
            <div className="bg-primary-100 p-3 rounded-lg">
              <Wallet size={24} className="text-primary-600" />
            </div>
          </div>
        </div>

        {/* Jumlah Transaksi */}
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-warning">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 font-medium">Total Transaksi</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">{transactions.length}</p>
            </div>
            <div className="bg-warning/20 p-3 rounded-lg">
              <TrendingUp size={24} className="text-warning" />
            </div>
          </div>
        </div>
      </div>

      {/* Transaksi Terakhir */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">Transaksi Terakhir</h2>
        </div>
        
        {recentTransactions.length === 0 ? (
          <div className="p-6 text-center text-slate-500">
            Belum ada transaksi. Tambahkan transaksi pertama Anda!
          </div>
        ) : (
          <div className="divide-y divide-slate-200">
            {recentTransactions.map(transaction => (
              <div key={transaction.id} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50">
                <div className="flex-1">
                  <p className="font-medium text-slate-900">{transaction.description}</p>
                  <p className="text-sm text-slate-500">{transaction.category}</p>
                </div>
                <div className="text-right">
                  <p className={`font-bold ${transaction.type === 'income' ? 'text-success' : 'text-danger'}`}>
                    {transaction.type === 'income' ? '+' : '-'} {formatCurrency(transaction.amount)}
                  </p>
                  <p className="text-xs text-slate-500">{new Date(transaction.date).toLocaleDateString('id-ID')}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
