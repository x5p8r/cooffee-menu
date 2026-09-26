import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [toast, setToast] = useState('')

  function addToCart(payload) {
    const key = `${payload.id}-${payload.extras.slice().sort().join(',')}`
    setItems((prev) => {
      const existing = prev.find((i) => i.key === key)
      if (existing) {
        return prev.map((i) =>
          i.key === key ? { ...i, quantity: i.quantity + payload.quantity } : i,
        )
      }
      return [...prev, { ...payload, key }]
    })
    setToast(`${payload.title} sepete eklendi`)
    window.setTimeout(() => setToast(''), 2200)
  }

  const count = items.reduce((sum, i) => sum + i.quantity, 0)
  const total = items.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0)

  const value = useMemo(
    () => ({ items, addToCart, count, total, toast }),
    [items, count, total, toast],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
