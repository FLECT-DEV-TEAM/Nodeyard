import express from 'express';

import { setup } from './setups';

const app = express();
setup(app);

export default app;
