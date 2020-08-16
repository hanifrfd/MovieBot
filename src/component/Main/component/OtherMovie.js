import React, { Component } from 'react'

import './OtherMovie.css'

import {baseUrl, APIKey} from "../data/tmdb-var.js";
import MovieItem from './MovieItem';

export class OtherMovie extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         listMovie : [],         
         listGenre: [],         
         popularity : "desc",
         genre : 16,
         page : 1,         
         isMore : false,
      }

      this.genreChange = this.genreChange.bind(this);
      this.moreMovie = this.moreMovie.bind(this);
      this.popularityChange = this.popularityChange.bind(this)
    }
    
    fetchMovie(){        
        const {genre, popularity, page, listMovie} = this.state;        
        fetch(`${baseUrl}/discover/movie?api_key=${APIKey}&language=en-US&sort_by=popularity.${popularity}&include_adult=false&page=${page}&with_genres=${genre}`)
                    .then(response => response.json())
                    .then(data => 
                        this.setState({
                            listMovie : data.results, 
                            isMore: true
                        })
                    );                
    }
    
    fetchGenre(){
        fetch(`${baseUrl}/genre/movie/list?api_key=${APIKey}&language=en-US`)
                    .then(response => response.json())
                    .then(data => this.setState({ listGenre : data.genres}));        
    }

    genreChange(e){        
        this.setState({
            genre: e.target.value,
        })
        console.log(this.state.genre);        
    }

    popularityChange(e){        
        this.setState({
            popularity: e.target.value,
        })
        console.log(this.state.popularity);        
    }
        
    moreMovie(){
        this.setState({
            isMore: false,
            page: this.state.page + 1
        })
    }

    componentDidMount(){        
        this.fetchMovie();
        this.fetchGenre();        
    }

    componentDidUpdate(prevState){
        if (prevState !== this.state){
            this.fetchMovie();
        }
    }
    

    render() {
        const { listMovie, listGenre, isMore, isLoading } = this.state;
        return (
            <div id="other-movies">
            <div className="section-title light">
                    <p>Other Movies</p>
            </div>
            <div className="filter-container">                
                <div className="filter-items filter-title">
                    <h3>Genre :</h3>
                </div>
                <div id="genre" className="filter-items filter-select">                    
                    <select name="genre" id="genres" onChange={this.genreChange}>
                        <option value="#">Genre</option>
                        {                     
                            listGenre.map(genres =>                     
                                <option value={genres.id} key={genres.id} id={genres.name}>{genres.name}</option>,                                
                            )
                        }  
                        
                    </select>
                </div>
                <div className="filter-items filter-title">
                    <h3>By Popularity</h3>
                </div>
                <div className="filter-items filter-years">
                    <select name="popularity" id="popularity" onChange={this.popularityChange}>
                        <option value="desc">From High to Low</option>
                        <option value="asc">From Low to High</option>
                    </select>
                </div>
            </div>
            <div className="list-movie other-movie">                                
                {                     
                listMovie.map(list =>                     
                    <MovieItem key={list.id} data={list}></MovieItem>
                    )}
                { isMore ?
                    <button id="more-movies" className="btn" onClick={this.moreMovie}>More Movies</button> : null
                }
            </div>
        </div>
        )
    }
}

export default OtherMovie
