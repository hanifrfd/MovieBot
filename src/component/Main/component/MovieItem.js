import React, { Component } from 'react'
import './MovieItem.css';

import noImg from '../../../styles/img/no-image.jpg';

import { imgUrl } from '../data/tmdb-var'

export class MovieItem extends Component {
    render() {
        const {poster_path, release_date, title, vote_average} = this.props.data;
        const poster = imgUrl + poster_path;
        return (
            <div className="movie-item fade-in ">                                        
                    {
                        poster_path ? <img src={poster} alt='poster' /> : <img src={noImg} alt='poster'></img>
                    }                    
                    <div className="movie-caption">                                                                            
                        <div className="movie-info" hidden>
                            <p>{release_date}</p>
                            <div className="movie-rate card">{vote_average}</div>
                        </div>    
                        <div className="movie-title">
                            <p>{title}</p>                            
                        </div>                                                                            
                    </div>
            </div>
        )
    }
}

export default MovieItem
