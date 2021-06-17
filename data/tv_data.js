import {useRouter} from 'next/router'
import useSWR from 'swr'
const fetcher = url => fetch(url).then(r => r.json())


export const getTv = (tv_id) => {    
    const {data : tv, error} = useSWR(`https://api.themoviedb.org/3/tv/${tv_id}?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US`,fetcher);
    return {tv, error};
};

export const getTrailer = (tv_id) => {    
    const {data : trailer, error} = useSWR(`https://api.themoviedb.org/3/tv/${tv_id}/videos?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US`,fetcher);
    return {trailer, error};
};

export const getRecomm = (tv_id) => {    
    const {data : recomm, error} = useSWR(`https://api.themoviedb.org/3/tv/${tv_id}/similar?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US&page=1`,fetcher);
    return {recomm, error};
};

export const getCast = (tv_id) => {    
    const {data : cast, error} = useSWR(`https://api.themoviedb.org/3/tv/${tv_id}/credits?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US`,fetcher);
    return {cast, error};
};

//   const res2 = await fetch(`https://api.themoviedb.org/3/tv/${context.query.tv_id}/similar?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US&page=1`)
//   const recomm = await res2.json()

//   const res3 = await fetch(`https://api.themoviedb.org/3/tv/${context.query.tv_id}/videos?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US`)
//   const trailer = await res3.json()
  
//   const res4 = await fetch(`https://api.themoviedb.org/3/tv/${context.query.tv_id}/credits?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US`)
//   const cast = await res4.json()
