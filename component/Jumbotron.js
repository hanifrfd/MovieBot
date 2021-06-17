import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Grid,
    Typography
 } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  jumbotron: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '70vh',
      backgroundColor: 'silver',
      // backgroundImage: `url(${'/1.png'})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      [theme.breakpoints.down('sm')]: {        
        height: '50vh',
      },
  }
}));

export default function Jumbotron({img}) {
  const classes = useStyles();

  const background = img ? `url("https://image.tmdb.org/t/p/original${img.backdrop_path}")` : `url(${'/1.png'})`;

  return (
    <div className={classes.root}>
      <Grid container className={classes.jumbotron}  style={{ backgroundImage: background }}>
        <Typography variant="h4">Welcome to moviebot</Typography>
      </Grid>
    </div>
  );
}
