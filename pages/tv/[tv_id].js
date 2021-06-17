import Head from 'next/head'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import useSWR from 'swr'

import { getTv, getTrailer, getCast, getRecomm } from '../../data/tv_data'

import AppBarBar from '../../component/AppBarBar'
import Jumbotron from '../../component/Jumbotron'
import ListItem from '../../component/ListItem'
import { makeStyles } from '@material-ui/core/styles';
import { 
  Grid,
  Typography,
  Card,
  Divider
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  movieInfo:{
    padding: '0px 100px',
    marginTop: -70,
    [theme.breakpoints.down('sm')]: {
      padding: '0px 16px',
    },
  },
  card:{
    width: 214.54,
    height: 281.54,    
    backgroundColor: 'silver',
    marginBottom: 16,
    marginRight: 8,
    backgroundSize: '100% 100%',
    backgroundPosition: '0% 0%',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('sm')]: {
      width: 114.54,
      height: 181.54,    
    },
  },
  movieTitle:{
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 54,
    justifyContent: 'center'
  },
  movieTitleInfo:{
    marginTop: 24,
  },
  section:{
    marginTop: 32,
  },
  recomm:{
    marginTop: 32,
    padding: '0px 100px',
  },
  infoItem:{
    marginRight: 24
  },
  moviInfo_label:{
    marginBottom: 24,
  }
}));

export default function tvInfo() {  
  const classes = useStyles();    
  const router = useRouter();

  const {tv} = getTv(router.query.tv_id);
  const {trailer} = getTrailer(router.query.tv_id);
  const {cast} = getCast(router.query.tv_id);
  const {recomm} = getRecomm(router.query.tv_id);
  
    
  if(!tv){
    return ( <div> { console.log('nothing') }</div> )
  }
  else{    
    return (
      <div>
        <Head>        
          <meta name="description" content="Generated by create next app" />        
          <title>Moviebot</title>
        </Head>
        <AppBarBar></AppBarBar>
        <Jumbotron img={tv}></Jumbotron>
        <main>
          <Grid container className={classes.movieInfo}>
            <Grid item container xs={12}>
              <Grid item>
                <Card className={classes.card} style={{ backgroundImage: `${tv ? `url("https://image.tmdb.org/t/p/w500${tv.poster_path}")` : ``}`   }}></Card>
              </Grid>           
              <div className={classes.movieTitle}>
                <Typography variant="h3">{tv.name}</Typography>
                <Grid item container className={classes.movieTitleInfo}>
                  <Typography variant="subtitle1" className={classes.infoItem}>{tv.first_air_date}</Typography>
                  <Divider orientation="vertical" flexItem className={classes.infoItem}/>
                  {
                      tv.genres.map((genre, index) =>                         
                        <Typography key={index} variant="subtitle1" className={classes.infoItem}>{ genre.name }</Typography>                                
                      )
                  }                            
                  <Divider orientation="vertical" flexItem className={classes.infoItem}/>
                  <Typography variant="subtitle1" className={classes.infoItem}>{tv.vote_average}</Typography>
                </Grid>
              </div>
            </Grid>
            <Grid item container xs={12} className={classes.section}>
              <Grid item xs={12}>
                <Typography variant="h6" className={classes.moviInfo_label}>
                  Overview
                </Typography>
                <Typography variant="subtitle2" style={{paddingRight:20}}>
                  {tv.overview}
                </Typography>
              </Grid>                      
            </Grid>
            <Grid item container xs={12} className={classes.section}>
              <ListItem title="Trailer" type="trailer" datas={trailer}></ListItem>
              <ListItem title="Cast" type="movie" datas={cast}></ListItem>
            </Grid>         
          </Grid>
          
          <Grid container className={classes.recomm}>
            <Grid item xs={12}>
              <ListItem title="Recommendation" list="recommendation" type="tv" datas={recomm}></ListItem>
            </Grid>
          </Grid>
        </main>
        <footer></footer>   
      </div> 
      )    
  }        
}

// tvInfo.getInitialProps = async (context) => {    
  
//   const res = await fetch(`https://api.themoviedb.org/3/tv/${context.query.tv_id}?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US`)
//   const tv = await res.json()

//   const res2 = await fetch(`https://api.themoviedb.org/3/tv/${context.query.tv_id}/similar?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US&page=1`)
//   const recomm = await res2.json()

//   const res3 = await fetch(`https://api.themoviedb.org/3/tv/${context.query.tv_id}/videos?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US`)
//   const trailer = await res3.json()
  
//   const res4 = await fetch(`https://api.themoviedb.org/3/tv/${context.query.tv_id}/credits?api_key=ec4bdffc57939748a8ae19503628e514&language=en-US`)
//   const cast = await res4.json()


//   return { tv, recomm, trailer, cast }
// }