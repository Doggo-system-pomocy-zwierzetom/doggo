import express, { Application } from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';

import useRoutes from './routes/useRoutes';

try {
  const app: Application = express();
  app.use(express.json());
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: true }));

  // Have Node serve the files for our built React app
  app.use(express.static(path.resolve(__dirname, '../frontend/build')));

  // Use all API routes
  app.use('/api', useRoutes());

  // All other GET requests not handled before will return our React app
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
  });

  app.listen(4444, () => {
    console.log('🚀 Server is up!');
  });
} catch (err: any) {
  console.error(`SERVER ERROR: `, err.message);
}
