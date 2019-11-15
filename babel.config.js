const packagebind = require('packagebind');

const babelConfig = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '_app': './src/app',
          '_app_utils': './src/app_utils',
          '_app_components': './src/app_components',
          '_ui_components': './src/ui_components',
          // 'design-troopers': 'design-troopers/dist/es',
          'design-troopers-styles': 'design-troopers/dist/es/styles',
          'design-troopers': '../design-troopers/src', // root path of design-troopers package code
        },
      },
    ],
  ],
  presets: ['@babel/env', '@babel/react', '@babel/flow'],
};

module.exports = packagebind(babelConfig);
// module.exports = babelConfig;
