
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import BackgroundEffect from './components/BackgroundEffect';
import { DesignerCredit } from './constants';
import { WardrobeItem, Language } from './types';

// Import views
import HomeView from './views/HomeView';
import GalleryView from './views/GalleryView';
import AddPieceView from './views/AddPieceView';
import StylingView from './views/StylingView';
import FavoritesView from './views/FavoritesView';
import LoginView from './views/LoginView';

const App: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('wardrobe-session') === 'active';
  });

  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('app-language');
    return (saved as Language) || 'en';
  });

  const [items, setItems] = useState<WardrobeItem[]>(() => {
    const saved = localStorage.getItem('my-wardrobe-items');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('app-language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('my-wardrobe-items', JSON.stringify(items));
  }, [items]);

  const login = () => {
    localStorage.setItem('wardrobe-session', 'active');
    setIsAuthenticated(true);
    navigate('/', { replace: true });
  };

  const logout = () => {
    localStorage.removeItem('wardrobe-session');
    setIsAuthenticated(false);
    navigate('/login', { replace: true });
  };

  const toggleFavorite = (id: string) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
    ));
  };

  const deleteItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const addItem = (newItem: Omit<WardrobeItem, 'id' | 'createdAt' | 'isFavorite'>) => {
    const item: WardrobeItem = {
      ...newItem,
      id: crypto.randomUUID(),
      createdAt: Date.now(),
      isFavorite: false,
    };
    setItems(prev => [item, ...prev]);
  };

  const isLoginPage = location.pathname === '/login';

  return (
    <div className={`min-h-screen flex flex-col bg-white overflow-x-hidden ${language === 'ja' ? 'font-serif' : 'font-sans'}`}>
      <BackgroundEffect />
      
      {isAuthenticated && !isLoginPage && (
        <Navbar language={language} setLanguage={setLanguage} />
      )}
      
      <main className="flex-grow flex flex-col w-full max-w-7xl mx-auto px-6 relative z-10">
        <Routes>
          <Route 
            path="/login" 
            element={!isAuthenticated ? <LoginView onLogin={login} language={language} setLanguage={setLanguage} /> : <Navigate to="/" replace />} 
          />
          
          <Route 
            path="/" 
            element={isAuthenticated ? <HomeView language={language} onLogout={logout} /> : <Navigate to="/login" replace />} 
          />
          
          <Route path="/collection" element={isAuthenticated ? <GalleryView items={items} language={language} onToggleFavorite={toggleFavorite} onDelete={deleteItem} /> : <Navigate to="/login" replace />} />
          <Route path="/add" element={isAuthenticated ? <AddPieceView language={language} onAdd={addItem} /> : <Navigate to="/login" replace />} />
          <Route path="/styling" element={isAuthenticated ? <StylingView items={items} language={language} /> : <Navigate to="/login" replace />} />
          <Route path="/favorites" element={isAuthenticated ? <FavoritesView items={items} language={language} onToggleFavorite={toggleFavorite} /> : <Navigate to="/login" replace />} />
          
          <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} replace />} />
        </Routes>
        
        {!isLoginPage && <DesignerCredit lang={language} />}
      </main>
    </div>
  );
};

export default App;
