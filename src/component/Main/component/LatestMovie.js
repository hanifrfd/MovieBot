import React, { Component } from 'react'

import './LatestMovie.css';

import {baseUrl, APIKey} from "../data/tmdb-var.js";
import MovieItem from './MovieItem';
import spinner from '../../../styles/img/spinner.svg';

export class LatestMovie extends Component {
    constructor(props){
        super(props);
        this.state = {
            listMovie : [],
            nowPlaying : true,
            upcoming: false,
            isLoading: false,
        }

        this.latestMovie = this.latestMovie.bind(this);
        this.filterClick = this.filterClick.bind(this);
    }    

    
    latestMovie = (request_type) => {
        this.setState({ isLoading: true})
            fetch(`${baseUrl}/movie/${request_type}?api_key=${APIKey}&language=en-US&page=1`)                    
                    .then(response => response.json())
                    .then(data => this.setState({ listMovie : data.results, isLoading: false}));            
    };
    
    componentDidMount(){        
        this.latestMovie("now_playing")
    }    
    
    filterClick(e){

        if(this.state.nowPlaying === true){
            this.setState({
                nowPlaying : false,
                upcoming : true,
            })
            this.latestMovie("upcoming")
        }else{
            this.setState({
                nowPlaying : true,
                upcoming : false,
            })
            this.latestMovie("now_playing")
        }
        
    }

    render() {
        const { listMovie, nowPlaying, upcoming, isLoading } = this.state;        
        return (
            <div>                                
                <div id="latest-movie">
                    <div id="now-playing" className="filter-movie">
                        <h2 id="now_playing" className={nowPlaying ? "white" : null} onClick={this.filterClick}>Now Playing</h2>
                        <h2 id="upcoming" className={upcoming ? "white" : null} onClick={this.filterClick}>Upcoming</h2>
                    </div>            
                    { isLoading ? 
                        <img src={spinner} alt="" style={{ height:"100px", width:"50px", marginLeft:"50%"}}/> :
                    
                    <div className="list-movie-horizontal">
                        {listMovie.map(list => 
                            <MovieItem key={list.id} data={list}></MovieItem>                            
                        )}
                    </div>
                    }
                </div>
            </div>
        )
    }
}

export default LatestMovie
