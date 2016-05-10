import path from 'path';

import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
// import favicon from 'serve-favicon';
import log4js from 'log4js';
import HttpErrors from 'http-errors';

// import { setupedPassport } from './passport';
import { setupRoutes } from './routes';


export function setup(app) {
  // View engine setup
  app.set('views', path.join(__dirname, '/../views'));
  app.set('view engine', 'pug');

  // uncomment after placing your favicon in /public
  // app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

  // Body parser setup
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // Cookie parser setup
  app.use(cookieParser());

  // Log4js setup
  app.use(log4js.connectLogger(log4js.getLogger('http'), { level: 'auto' }));

  // Passport setup when using
  // app.use(setupedPassport.initialize());
  // app.use(setupedPassport.session());

  // Static dir setup
  app.use(express.static(path.join(__dirname, '../public')));

  // Routing setup
  setupRoutes(app);

  // Handling default request
  app.use((req, res, next) => {
    const err = new HttpErrors.NotFound();
    next(err);
  });

  // Error handling
  app.use((err, req, res) => {
    res.status(err.status || 500);

    const error = (process.env.NODE_ENV !== 'production') ? err : null;

    const params = {
      error,
      message: err.message
    };

    if (/^\/api/.test(req.originalUrl)) {
      res.send(params);
    } else {
      res.render('error', params);
    }
  });
}
