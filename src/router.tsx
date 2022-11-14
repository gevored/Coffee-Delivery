import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { IntroPage } from './pages/Intro'
import { CheckoutPage } from './pages/CheckoutPage'
export function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
      </Routes>
      <Routes>
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  )
}
