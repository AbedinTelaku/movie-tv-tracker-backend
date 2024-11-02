import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const getPopularMovies = async (req, res) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch films');
    }
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default getPopularMovies;
