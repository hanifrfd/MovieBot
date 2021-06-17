import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import { useRouter } from 'next/router'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,    
  },
  appBar: {
    padding: '0px 50px',
    background: 'transparent',
    position: 'absolute',    
    boxShadow: 'none',
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      padding: '0px 16px',      
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    padding: 0,
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  toolbar:{
    padding: 0,
    [theme.breakpoints.down('sm')]: {      
      display: 'flex',
      justifyContent: 'space-between'
    },
  },  
  title: {    
    '&:hover':{
      cursor: 'pointer'
    },    
    width: 'auto'
  },
  menu:{
    display: 'flex',    
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    marginLeft: 'auto',
  },
  menuItem:{
    marginLeft: 36,
    padding: 0
  }
}));

export default function AppBarBar() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>          
          <Typography variant="h6" className={classes.title} onClick={() => router.push('/')}>
            MOVIEBOT
          </Typography>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <div className={classes.menu}>
            <Typography variant="subtitle1" color="inherit" className={classes.menuItem}>Movies</Typography>
            <Typography variant="subtitle1" color="inherit" className={classes.menuItem}>TV Series</Typography>
            <IconButton edge="start" color="inherit" className={classes.menuItem} aria-label="search">
              <SearchIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
