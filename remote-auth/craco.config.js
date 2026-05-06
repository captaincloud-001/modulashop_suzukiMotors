const { ModuleFederationPlugin } = require('@module-federation/enhanced/webpack');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.publicPath = 'http://localhost:3001/';
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: 'authApp',
          filename: 'remoteEntry.js',
          exposes: {
            './AuthPage': './src/AuthPage.tsx',
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
    port: 3001,
  },
};