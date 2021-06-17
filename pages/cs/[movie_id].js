import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
// import MovieInfo  from '../../component/movie/MovieInfo'
import dynamic from 'next/dynamic'

// const MovieInfo = dynamic(() => import('../../component/movie/MovieInfo'))
import { getMovie } from '../../data/movie_data'

export default function movie() {                    
    const router = useRouter()
    const {movies, error} = getMovie(router.query.movie_id);
    
    return(        
        <div>        
        {
            console.log(movies)
        }        
        {
            movies ? 
            <div>
                {'' + movies.backdrop_path}
                {movies.genres.map((genre, index) => ''+genre.name)}
            </div>
            : 'loading'
        }
        </div>
    )
}