import path from 'path';

import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import favicon from 'serve-favicon';

import config from 'config';

import log4js from '../../log4js';

import setupedPassport from './passport';
import setupRoutes from './routes';


var logger = log4js.getLogger('app');


export default function setup(app) {

  // view engine setup
  app.set('views', path.join(__dirname, '/../views'));
  app.set('view engine', 'jade');

  // uncomment after placing your favicon in /public
  // app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

  app.use(log4js.connectLogger(log4js.getLogger('http'), { level: 'auto' }));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(cookieParser());

  app.use(express.static(path.join(__dirname, '/../public')));

  // app.use(setupedPassport.initialize());

  setupRoutes(app, setupedPassport);

  app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
      error: err,
      message: err.message
    });
  });

}
