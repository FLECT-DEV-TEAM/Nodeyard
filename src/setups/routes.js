import home from '../controllers/home';
import greet from '../controllers/api/greet';


function setup(app) {
  app.use('/', home);

  // API controllers is placed under "/api"
  app.use('/api/greet', greet);
}


export const setupRoutes = setup;
