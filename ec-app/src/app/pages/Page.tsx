import Footer from '../../app/shared/components/layout/Footer';
import Header from '../../app/shared/components/layout/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { CartProvider } from '../shared/contexts/CartContext';

const Page: React.FC = () => {
  return (
    <CartProvider>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </CartProvider>
  );
};

export default Page;
