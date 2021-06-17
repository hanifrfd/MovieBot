import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import { getMovie } from '../../data/movie_data'

export default function MovieInfo() {                    
    // const {movie, error} = getMovie();
    const router = useRouter()
    const {movies, error} = getMovie(router.query.movie_id);

    // const [movie,setMovies] = useState([])    
    // useEffect(() => {        
    //     // setMovies(movie)
    //     setMovies(movies)
    // }, [])
    
    return(        
        <div>        
        {
            console.log(movies)
        }        
        {
            movies ? 
            <div>
                {'' + movies.adult}
                {movies.genres.map((genre, index) => ''+genre.name)}
            </div>
            : 'loading'
        }
        </div>
    )
}