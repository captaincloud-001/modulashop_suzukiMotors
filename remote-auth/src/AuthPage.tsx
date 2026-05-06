import React from 'react';

const AuthPage = () => {
  return (
    <div style={{ padding: '2rem', background: '#e3f2fd', minHeight: '100vh' }}>
      <h1>🔐 Auth Module</h1>
      <p>Login and authentication managed here.</p>
      <button style={{ padding: '10px 20px', marginTop: '1rem' }}>
        Sign In
      </button>
    </div>
  );
};

export default AuthPage;