import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-server';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config.js';

var compiler = webpack(config);

// var express = require('express');
var app = express();
// var db = require('./sequelizeDB.js');

var publicPath = __dirname + '/../public/';

app.use(express.static(publicPath));

app.use(webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}));

app.use(webpackHotMiddleware(compiler));

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('karun says server works');
});
