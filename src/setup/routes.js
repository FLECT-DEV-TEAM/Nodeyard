import home from '../controllers/render/home';
import greet from '../controllers/api/greet';

import authorization from '../middlewares/authorization';


export default function setup(app, passport) {

  app.use('/', home);

  // API controllers is placed under "/api"
  app.use('/api/greet', authorization, greet);

}
