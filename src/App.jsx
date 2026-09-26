import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { CartProvider, useCart } from './context/CartContext'
import BottomNav from './components/BottomNav'
import ThemeSwitcher from './components/ThemeSwitcher'
import Home from './pages/Home'
import Menu from './pages/Menu'
import QRMenu from './pages/QRMenu'
import Contact from './pages/Contact'

function Toast() {
  const { toast } = useCart()
  if (!toast) return null
  return (
    <div className="fixed bottom-24 left-1/2 z-50 -translate-x-1/2 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--accent-text)] shadow-[var(--shadow)]">
      {toast}
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <BrowserRouter>
          <div className="min-h-dvh pb-24">
            <ThemeSwitcher />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/qr" element={<QRMenu />} />
              <Route path="/iletisim" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <BottomNav />
            <Toast />
          </div>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  )
}
