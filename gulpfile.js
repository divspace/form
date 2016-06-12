var elixir = require('laravel-elixir');

require('elixir-imagemin');
require('elixir-jshint');
require('elixir-modernizr');

var src = {
  css: elixir.config.assetsPath + '/scss',
  js: elixir.config.assetsPath + '/js'
};

var dist = {
  css: elixir.config.publicPath + '/css',
  js: elixir.config.publicPath + '/js'
};

var packages = {
  bootstrap: './node_modules/bootstrap/dist/js',
  html5shiv: './node_modules/html5shiv/dist',
  jquery: './node_modules/jquery/dist',
  respond: './node_modules/respond.js/dest',
  tether: './node_modules/tether/dist/js',
  vue: './node_modules/vue/dist'
};

elixir(function(mix) {
  mix.sass([
    src.css + '/app.scss'
  ], dist.css + '/app.css');

  mix.scripts([
    packages.html5shiv + '/html5shiv.js',
    packages.respond + '/respond.src.js'
  ], dist.js + '/ie.js');

  mix.scripts([
    packages.jquery + '/jquery.js',
    packages.tether + '/tether.js',
    packages.bootstrap + '/bootstrap.js'
  ], dist.js + '/vendor.js');

  mix.browserify([
    src.js + '/app.js'
  ], dist.js + '/app.js');

  mix.modernizr([
    dist.css + '/**/*.css',
    dist.js + '/**/*.js'
  ], dist.js + '/modernizr.js');

  mix.version([
    dist.css + '/app.css',
    dist.js + '/app.js',
    dist.js + '/ie.js',
    dist.js + '/modernizr.js',
    dist.js + '/vendor.js'
  ], 'public/build');

  mix.jshint([
    src.js + '/**/*.js'
  ]);
});
