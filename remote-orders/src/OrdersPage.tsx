import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

const GET_ORDERS = gql`
  query {
    orders {
      id
      item
      status
      total
      date
    }
  }
`;

const OrdersList = () => {
  const { loading, error, data } = useQuery(GET_ORDERS);

  if (loading) return <p style={{ padding: '2rem' }}>⏳ Loading orders...</p>;
  if (error) return <p style={{ padding: '2rem' }}>❌ Error: {error.message}</p>;

  const statusColor: any = {
    Delivered: 'green',
    Shipped: 'orange',
    Processing: 'blue',
  };

  return (
    <div style={{ padding: '2rem', background: '#e8f5e9', minHeight: '100vh' }}>
      <h1>📋 Orders Module</h1>
      <p style={{ color: '#666', marginBottom: '1rem' }}>Live data from GraphQL API</p>
      {data.orders.map((o: any) => (
        <div key={o.id} style={{
          border: '1px solid #ccc',
          padding: '1rem',
          margin: '0.5rem 0',
          borderRadius: '8px',
          background: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <strong>{o.id}</strong>
            <span style={{ marginLeft: '1rem' }}>{o.item}</span>
            <span style={{ marginLeft: '1rem', color: '#666', fontSize: '0.85rem' }}>{o.date}</span>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <strong>{o.total}</strong>
            <span style={{ color: statusColor[o.status] || 'gray', fontWeight: 'bold' }}>
              {o.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

const OrdersPage = () => (
  <ApolloProvider client={client}>
    <OrdersList />
  </ApolloProvider>
);

export default OrdersPage;