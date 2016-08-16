module.exports = [{
  test: /\.jsx?$/,
  exclude: /(node_modules|bower_components)/,
  loader: 'babel',
  query: {
    presets: ['es2015', 'react', 'stage-0']
  }
}, {
  test: /\.css$/,
  loader: 'style-loader!css-loader'
}, {
  test: /\.scss/,
  loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
}, {
  test: /\.woff(2)?(\?v=.+)?$/,
  loader: "url-loader?limit=10000&minetype=application/font-woff"
}, {
  test: /\.(ttf|eot|svg|otf)(\?v=.+)?$/,
  loader: "file-loader"
}, {
  test: /\.(png|jpg|gif)$/,
  loader: 'file-loader?limit=8192'
}]