import { useState, useEffect } from 'react'
import Dashboard from './components/Dashboard'
import TransactionForm from './components/TransactionForm'
import TransactionHistory from './components/TransactionHistory'
import AnalyticsChart from './components/AnalyticsChart'
import Sidebar from './components/Sidebar'
import { loadTransactions, saveTransactions } from './utils/storage'

export default function App() {
  const [transactions, setTransactions] = useState([])
  const [activeTab, setActiveTab] = useState('dashboard')

  useEffect(() => {
    const saved = loadTransactions()
    setTransactions(saved)
  }, [])

  const handleAddTransaction = (transaction) => {
    const newTransaction = {
      ...transaction,
      id: Date.now().toString(),
      date: new Date().toISOString()
    }
    const updated = [newTransaction, ...transactions]
    setTransactions(updated)
    saveTransactions(updated)
  }

  const handleDeleteTransaction = (id) => {
    const updated = transactions.filter(t => t.id !== id)
    setTransactions(updated)
    saveTransactions(updated)
  }

  return (
    <div className="flex h-screen bg-slate-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {activeTab === 'dashboard' && (
            <Dashboard transactions={transactions} />
          )}
          
          {activeTab === 'add-transaction' && (
            <TransactionForm onAddTransaction={handleAddTransaction} />
          )}
          
          {activeTab === 'history' && (
            <TransactionHistory 
              transactions={transactions} 
              onDelete={handleDeleteTransaction}
            />
          )}
          
          {activeTab === 'analytics' && (
            <AnalyticsChart transactions={transactions} />
          )}
        </div>
      </main>
    </div>
  )
}
