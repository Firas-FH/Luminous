module.exports = {
    // ... other configurations ...
    output: {
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'images/',
                publicPath: '/'
              }
            }
          ]
        }
      ]
    }
  };