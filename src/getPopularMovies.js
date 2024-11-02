// require('dotenv').config();
// console.log('API Key:', process.env.API_KEY);

// const express = require('express');
// const cors = require('cors');
// const fetch = require('node-fetch');
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors({ origin: 'http://localhost:3000' }));

// app.get('/api/popular-movies', async (req, res) => {
//   try {
//     const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
//     if (!response.ok) {
//       throw new Error('Failed to fetch films');
//     }
//     const data = await response.json();
//     res.json(data.results);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
