import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import getPopularMovies from './getPopularMovies.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/api/popular-movies', getPopularMovies);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
