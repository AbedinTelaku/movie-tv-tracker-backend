require('dotenv').config();
const fetch = require('node-fetch');

const fetchPopularMovies = async () => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular', {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch films');
    }

    const data = await response.json();
    console.log(data.results);
  } catch (error) {
    console.error('Error fetching films:', error.message);
  }
};

fetchPopularMovies();
