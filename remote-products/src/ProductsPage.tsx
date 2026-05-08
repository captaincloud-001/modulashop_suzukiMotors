import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

const GET_PRODUCTS = gql`
  query {
    products {
      id
      name
      price
      category
      inStock
    }
  }
`;

const ProductsList = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p style={{ padding: '2rem' }}>⏳ Loading products...</p>;
  if (error) return <p style={{ padding: '2rem' }}>❌ Error: {error.message}</p>;

  return (
    <div style={{ padding: '2rem', background: '#f3e5f5', minHeight: '100vh' }}>
      <h1>📦 Products Module</h1>
      <p style={{ color: '#666', marginBottom: '1rem' }}>Live data from GraphQL API</p>
      {data.products.map((p: any) => (
        <div key={p.id} style={{
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
            <strong>{p.name}</strong>
            <span style={{ marginLeft: '1rem', color: '#666', fontSize: '0.9rem' }}>{p.category}</span>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <strong>{p.price}</strong>
            <span style={{
              padding: '2px 8px',
              borderRadius: '4px',
              fontSize: '0.8rem',
              background: p.inStock ? '#e8f5e9' : '#ffebee',
              color: p.inStock ? 'green' : 'red'
            }}>
              {p.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

const ProductsPage = () => (
  <ApolloProvider client={client}>
    <ProductsList />
  </ApolloProvider>
);

export default ProductsPage;