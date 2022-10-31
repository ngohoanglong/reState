module.exports = {
  target: 'node',
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  resolve: {
    fallback: {
      path: require.resolve(
        'path-browserify'
      ),
    },
    extensions: [
      '.jsx',
      '.js',
      '.tsx',
      '.ts',
    ],
  },
}
