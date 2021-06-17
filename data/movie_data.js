import {useRouter} from 'next/router'
import useSWR from 'swr'
const fetcher = url => fetch(url).then(r => r.json())


export const getMovie = (movie_id) => {    
    const {data : movie, error} = useSWR(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US`,fetcher);
    return {movie, error};
};

export const getTrailer = (movie_id) => {    
    const {data : trailer, error} = useSWR(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US`,fetcher);
    return {trailer, error};
};

export const getRecomm = (movie_id) => {    
    const {data : recomm, error} = useSWR(`https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US&page=1`,fetcher);
    return {recomm, error};
};

export const getCast = (movie_id) => {    
    const {data : cast, error} = useSWR(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US`,fetcher);
    return {cast, error};
};

//   const res2 = await fetch(`https://api.themoviedb.org/3/movie/${context.query.movie_id}/similar?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US&page=1`)
//   const recomm = await res2.json()

//   const res3 = await fetch(`https://api.themoviedb.org/3/movie/${context.query.movie_id}/videos?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US`)
//   const trailer = await res3.json()
  
//   const res4 = await fetch(`https://api.themoviedb.org/3/movie/${context.query.movie_id}/credits?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US`)
//   const cast = await res4.json()
