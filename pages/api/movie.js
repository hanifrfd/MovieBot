// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { baseUrl, imgUrl, APIKey } from '../../data/tmdb-var';

export default async (req, res) => {  
  const requestMovie = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=ec4bdffc57939748a8ae19503628e514'); 

  res.status(200).json(requestMovie);
}