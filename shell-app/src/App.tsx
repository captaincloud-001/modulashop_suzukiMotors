import React, { Suspense, useState } from 'react';

const AuthPage = React.lazy(() => import('authApp/AuthPage'));
const ProductsPage = React.lazy(() => import('productsApp/ProductsPage'));
const OrdersPage = React.lazy(() => import('ordersApp/OrdersPage'));

const App = () => {
  const [activePage, setActivePage] = useState('products');

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      {/* Navigation */}
      <nav style={{
        background: '#1a1a2e',
        padding: '1rem 2rem',
        display: 'flex',
        gap: '1rem',
        alignItems: 'center'
      }}>
        <span style={{ color: 'white', fontWeight: 'bold', marginRight: '2rem' }}>
          🏬 ModulaShop
        </span>
        {['products', 'orders', 'auth'].map(page => (
          <button
            key={page}
            onClick={() => setActivePage(page)}
            style={{
              padding: '8px 16px',
              background: activePage === page ? '#e94560' : 'transparent',
              color: 'white',
              border: '1px solid #e94560',
              borderRadius: '4px',
              cursor: 'pointer',
              textTransform: 'capitalize'
            }}
          >
            {page}
          </button>
        ))}
      </nav>

      {/* Remote Modules Load Here */}
      <Suspense fallback={
        <div style={{ padding: '2rem', fontSize: '1.2rem' }}>
          ⏳ Loading module...
        </div>
      }>
        {activePage === 'auth' && <AuthPage />}
        {activePage === 'products' && <ProductsPage />}
        {activePage === 'orders' && <OrdersPage />}
      </Suspense>
    </div>
  );
};

export default App;