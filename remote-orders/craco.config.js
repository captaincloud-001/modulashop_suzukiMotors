const { ModuleFederationPlugin } = require('@module-federation/enhanced/webpack');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.publicPath = 'http://localhost:3003/';
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: 'ordersApp',
          filename: 'remoteEntry.js',
          exposes: {
            './OrdersPage': './src/OrdersPage.tsx',
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
    port: 3003,
  },
};