const { ModuleFederationPlugin } = require('@module-federation/enhanced/webpack');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.publicPath = 'http://localhost:3000/';
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: 'shell',
          remotes: {
            authApp: 'authApp@http://localhost:3001/remoteEntry.js',
            productsApp: 'productsApp@http://localhost:3002/remoteEntry.js',
            ordersApp: 'ordersApp@http://localhost:3003/remoteEntry.js',
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