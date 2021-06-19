import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {     
    Card
 } from '@material-ui/core';
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => ({
  card:{
    '&:hover': {
      cursor: 'pointer'
    },
    backgroundColor: 'silver',
    marginBottom: 16,
    marginRight: 8,
    backgroundSize: '100% 100%',
    backgroundPosition: '0% 0%',
    backgroundRepeat: 'no-repeat',    
  },
  movie: {    
    minWidth: '11vw',
    height: 200,
    
    [theme.breakpoints.down('sm')]: {
      marginBottom: 16,
      minWidth: '40vw',
      height: '50vw'
    },
  },  
  trailer: {    
    minWidth: '17vw',
    height: 130,    
    backgroundSize: 'cover',
    backgroundPosition: 'center center',

    [theme.breakpoints.down('sm')]: {      
      minWidth: 236,
      height: 130,
      padding: 0,
    },
  },
  videoContainer: {
    position: 'fixed',    
    top: 0,    
    bottom:0,
    left:0,
    right:0,
    width: '100%',
    height: '100vh',
    display: 'none',
    zIndex: 9,
    padding: '8vh 0px',
    backgroundColor: '#000',
    [theme.breakpoints.down('sm')]: {      
      padding: '30% 0px',
    },
  },
  videoController:{    
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
    top: 10,
    right: 15,
    position: 'absolute',
    cursor: 'pointer'
  },
  display:{
    display: 'block',
  },
  hide:{
    display: 'none',
  }
  
}));

export default function CardItem({type, data}) {
  const classes = useStyles();
  const router = useRouter();
  const [display, setDisplay] = useState(false);


  const playVideo = () => {        
    setDisplay(!display);    
  }

  const bgImage = () => {
    
    if(data.poster_path){
      return `url("https://image.tmdb.org/t/p/w500${data.poster_path}")`
    }
    else if(data.profile_path){
      return `url("https://image.tmdb.org/t/p/w500${data.profile_path}")`
    }
    else if(data.poster_path == null || data.profile_path == null){
      return ''      
    }
    
  }    

  return (    
    <div>    
    {      
        type !== 'trailer' ?
        <Card 
          className={`${type === 'trailer' ? classes.trailer : classes.movie} ${classes.card }`} 
          onClick={() => type !== 'movie' ? router.push('/tv/[tv_id]',`/tv/${data.id}`) : router.push('/movie/[movie_id]','/movie/' + data.id)} 
          style={{ 
            backgroundImage:`${ bgImage() }`
          }}
        >
        </Card>
        :
        <div>
          <Card 
            className={`${classes.trailer} ${classes.card}`} 
            onClick={playVideo} 
            style={{ backgroundImage: `url("https://img.youtube.com/vi/${data.key}/0.jpg")`}}>
          </Card>
          <div className={` ${classes.videoContainer} ${display ? classes.display  : classes.hide}`}>            
            <div className={classes.videoController} onClick={playVideo}>X</div>
            <iframe width="100%" height="100%"
            src={`https://www.youtube.com/embed/${data.key}${display ? `?autoplay=1` : ``}`}
            title={data.name} frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
            </iframe>                    
          </div>
        </div>    
    }
    </div>
 
}
