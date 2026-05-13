const { ModuleFederationPlugin } = require('@module-federation/enhanced/webpack');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.publicPath = 'http://localhost:3000/';
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: 'shell',
          remotes: {
            authApp: 'authApp@https://modulashop-auth.vercel.app/remoteEntry.js',
            productsApp: 'productsApp@https://modulashop-products.vercel.app/remoteEntry.js',
            ordersApp: 'ordersApp@https://modulashop-orders.vercel.app/remoteEntry.js',
          },
        shared: {
            react: { singleton: true, eager: true, requiredVersion: false },
            'react-dom': { singleton: true, eager: true, requiredVersion: false },
        },
        })
      );
      return webpackConfig;
    },
  },
  devServer: {
    port: 3000,
  },
};