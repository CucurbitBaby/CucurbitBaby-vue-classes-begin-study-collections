const path=require('path');

module.exports={
  mode: 'development',
  // entry: './src/vm.js',
  // entry: './src/vm2.js',
  // entry: './src/vm3.js',
  entry: './src/vm4.js',
  output: {
    path: path.resolve(__dirname, 'dest'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.css$/i, use: ['style-loader', 'css-loader']}
    ]
  }
};