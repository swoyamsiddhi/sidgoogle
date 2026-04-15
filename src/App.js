import React, { useState, useEffect } from 'react';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AppRoutes } from './components/AppRoutes'; 

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkTheme]);

  return (
    <div className="bg-gray-100 dark:bg-red-900 dark:text-gray-100 min-h-screen transition-colors duration-200">
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
