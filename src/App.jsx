import { Routes, Route } from 'react-router-dom'
import ScrollToTop from '@/components/layout/ScrollToTop'
import Home from '@/pages/Home'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Futuras rotas:
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/termos" element={<Terms />} />
          <Route path="/privacidade" element={<Privacy />} />
        */}
      </Routes>
    </>
  )
}

export default App
