import express from 'express';
import privateRoutes from './usePrivateRoutes';
import auth from '../middlewares/auth';

import getAdoptions from '../controllers/getAll/getAdoptions';
import getMissings from '../controllers/getAll/getMissings';
import getSingleAdoption from '../controllers/getRow/getSingleAdoption';
import getSingleMissing from '../controllers/getRow/getSingleMissing';

export default function useRoutes() {
  const router = express.Router();

  router.get('/adoptions', getAdoptions);
  // router.get('/missings', getMissings);

  router.get('/single-adoption/:id', getSingleAdoption);
  // router.get('/single-missing/:id', getSingleMissing);

  router.use(auth, privateRoutes());

  router.use((req, res, next) => {
    res.status(404);
  });

  return router;
}
