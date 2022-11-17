import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { IntroPage } from './pages/Intro'
import { CheckoutPage } from './pages/CheckoutPage'
import { SucessPage } from './pages/SucessPage'

export function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
      </Routes>
      <Routes>
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <Routes>
        <Route path="/success" element={<SucessPage />} />
      </Routes>
    </BrowserRouter>
  )
}
