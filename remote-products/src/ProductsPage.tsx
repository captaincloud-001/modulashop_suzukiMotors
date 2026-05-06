import React from 'react';

const ProductsPage = () => {
  const products = [
    { id: 1, name: 'Laptop', price: '$999' },
    { id: 2, name: 'Phone', price: '$699' },
    { id: 3, name: 'Tablet', price: '$499' },
  ];

  return (
    <div style={{ padding: '2rem', background: '#f3e5f5', minHeight: '100vh' }}>
      <h1>📦 Products Module</h1>
      {products.map(p => (
        <div key={p.id} style={{ border: '1px solid #ccc', padding: '1rem', margin: '0.5rem 0', borderRadius: '8px' }}>
          <strong>{p.name}</strong> — {p.price}
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;