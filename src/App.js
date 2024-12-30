import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18/i18n'; 

import Home from './pages/Home'; 
import Products from './pages/Products'; 
import Users from './pages/Users'; 
import Partners from './pages/Partners'; 

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); 
  };

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">{t('home')}</Link></li>
          <li><Link to="/products">{t('products')}</Link></li>
          <li><Link to="/users">{t('users')}</Link></li>
          <li><Link to="/partners">{t('partners')}</Link></li>
        </ul>
        <div>
          <button onClick={() => changeLanguage('en')}>EN</button>
          <button onClick={() => changeLanguage('ru')}>RU</button>
          <button onClick={() => changeLanguage('uz')}>UZ</button>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<Users />} />
        <Route path="/partners" element={<Partners />} />
      </Routes>
    </Router>
  );
}

export default App;
