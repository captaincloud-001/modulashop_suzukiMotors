const { ModuleFederationPlugin } = require('@module-federation/enhanced/webpack');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.publicPath = 'http://localhost:3002/';
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: 'productsApp',
          filename: 'remoteEntry.js',
          exposes: {
            './ProductsPage': './src/ProductsPage.tsx',
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
    port: 3002,
  },
};