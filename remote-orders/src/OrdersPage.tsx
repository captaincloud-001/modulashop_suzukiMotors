import React from 'react';

const OrdersPage = () => {
  const orders = [
    { id: 'ORD-001', item: 'Laptop', status: 'Delivered' },
    { id: 'ORD-002', item: 'Phone', status: 'Shipped' },
    { id: 'ORD-003', item: 'Tablet', status: 'Processing' },
  ];

  return (
    <div style={{ padding: '2rem', background: '#e8f5e9', minHeight: '100vh' }}>
      <h1>📋 Orders Module</h1>
      {orders.map(o => (
        <div key={o.id} style={{ border: '1px solid #ccc', padding: '1rem', margin: '0.5rem 0', borderRadius: '8px' }}>
          <strong>{o.id}</strong> — {o.item} —{' '}
          <span style={{ color: o.status === 'Delivered' ? 'green' : o.status === 'Shipped' ? 'orange' : 'blue' }}>
            {o.status}
          </span>
        </div>
      ))}
    </div>
  );
};

export default OrdersPage;