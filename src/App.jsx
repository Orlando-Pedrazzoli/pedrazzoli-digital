import { Routes, Route } from 'react-router-dom';
import ScrollToTop from '@/components/layout/ScrollToTop';
import CookieConsent from '@/components/layout/CookieConsent';
import Home from '@/pages/Home';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/privacidade' element={<Privacy />} />
        <Route path='/termos' element={<Terms />} />
      </Routes>
      <CookieConsent />
    </>
  );
}

export default App;
