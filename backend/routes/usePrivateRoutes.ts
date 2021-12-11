import express from 'express';

// import getNews from '../controllers/getNews';

export default function usePrivateRoutes() {
  const router = express.Router();

  // router.get('/news', getNews);

  return router;
}
