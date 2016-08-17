const gulp = require('gulp')
const gutil = require('gulp-util')
const file = require('gulp-file')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

const webpackConfigDev = require('./config/webpack.config.dev')
const webpackConfigProd = require('./config/webpack.config.prod')

const BUILD_PATH = './build'
const SRC_PATH = './src'

gulp.task('copy', () => {
  return gulp.src([
    `./index.html`,
    './manifest.json'
    ])
    .pipe(gulp.dest(BUILD_PATH))
})

gulp.task('assets', () => {
  return gulp.src('./assets/**/*')
    .pipe(gulp.dest(`${BUILD_PATH}/assets`))
})

gulp.task('webpack', cb => {
  webpack(webpackConfigProd, (err, stats) => {
    if (err) throw new gutil.PluginError('webpack', err)
    gutil.log('[webpack]', stats.toString())
    cb()
  })
})

gulp.task('serve', () => {
  const compiler = webpack(webpackConfigDev)

  const server = new WebpackDevServer(compiler, {
    contentBase: BUILD_PATH,
    hot: true,
    stats: {
      colors: true
    }
  })

  server.listen(8080, 'localhost', err => {
    if (err) throw new gutil.PluginError('webpack-dev-server', err)
    gutil.log('[webpack-dev-server]', 'http://localhost:8080')
  })
})

gulp.task('default', ['copy', 'assets', 'serve'])