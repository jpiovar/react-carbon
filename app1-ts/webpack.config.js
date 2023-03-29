import { resolve } from 'path';

export const entry = './app/entry';
export const output = {
  // options related to how webpack emits results
  path: resolve(__dirname, 'dist'),


  // the target directory for all output files
  // must be an absolute path (use the Node.js path module)
  filename: 'bundle.js', // string
};
export const module = {
  rules: [{
    test: /\.scss$/,
    use: [{
      loader: 'style-loader'
    }, {
      loader: 'css-loader'
    }, {
      loader: 'sass-loader',
      options: {
        sassOptions: {
          includePaths: ['node_modules']
        }
      }
    }]
  }]
};