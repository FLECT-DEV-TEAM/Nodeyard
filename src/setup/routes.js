import home from '../controllers/render/home';

import users from '../controllers/api/users';


export default function setup(app, passport, authorization) {

  app.use('/', home);

  app.use('/api/users', users);

}
