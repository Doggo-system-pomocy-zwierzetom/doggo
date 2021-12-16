import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import adoptionsRoutes from './routes/adoptions.js';
import userRoutes from './routes/users.js';
import dotenv from 'dotenv';
import path from 'path';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/adoptions', adoptionsRoutes);
app.use('/user', userRoutes);

if (process.env.NODE_ENV === 'production') {
  // Have Node serve the files for our built React app
  app.use(express.static('frontend/build'));

  // All other GET requests not handled before will return our React app
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('frontend', 'build', 'index.html'));
  });
}
console.log(`🟢 ${process.env.NODE_ENV}🟢`);
const PORT = process.env.port;
mongoose
  .connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(process.env.port || 5000, () => console.log(`🚀🚀🚀 Server running on port: ${PORT} 🚀🚀🚀`))
  )
  .catch((error) => console.log(error.message));
