let mix = require('laravel-mix');

mix.js('resources/scripts/app.ts', 'public/js').setPublicPath('public')
  .webpackConfig({
    module: {
      rules: [
        {
          test: /\.ts?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: { configFile: 'tsconfig.client.json' }
        },
      ],
    },
    resolve: {
      extensions: ['*', '.ts'],
    },
  });
mix.postCss('resources/css/app.css', 'public/css', [
  require('tailwindcss'),
]).setPublicPath('public');
