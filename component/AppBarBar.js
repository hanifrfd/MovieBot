import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

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
      marginLeft: 0
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
    marginLeft: 'auto',
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      width: '100vw',
      height: '100vh',
      backgroundColor: '#1C1C1C',      
      left: -500,
      top: 0,
      flexDirection: 'column',      
      transition : 'left 0.6s',
    },    
  },
  isOpen:{    
      left: -16,
  },
  menuItem:{
    marginLeft: 36,
    padding: 0,    
    [theme.breakpoints.down('sm')]: {
      marginTop: 18,
      marginLeft: 16,
      marginRight: 24,
    },
  },
  search:{
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  close:{
    textAlign: 'right',
    display:'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },  
  searchContainer:{
    position: 'absolute',
    top: 0,    
    left: '-11100px',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#1C1C1C',
    
    transition: 'left 1s',
  },
  searchOpen:{    
    left: -16,
  },
  searchBox:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '100px 0px 0px 0px'
  },
  inputRoot:{
    marginLeft: 16
  }
}));

export default function AppBarBar() {
  const classes = useStyles();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  const [search, setSearch] = useState('');

  const chgOpen = () => {
    setIsOpen(!isOpen);    
    console.log('halo')
  }

  const chgSearchOpen = () => {
    setIsSearch(!isSearch);    
    console.log('haslo')
  }

  const chgSearch = () => {      
    console.log(search);
    if(search !== ''){
      router.push('/search/' + search)  
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>          
          <Typography variant="h6" className={classes.title} onClick={() => router.push('/')}>
            MOVIEBOT
          </Typography>
          <div className={classes.menuButton}>
            <IconButton edge="start" color="inherit" className={``} aria-label="search" onClick={() => chgSearchOpen()}>
                <SearchIcon />
            </IconButton>
            <IconButton edge="start"  color="inherit" aria-label="menu" onClick={() => chgOpen()}>
              <MenuIcon />
            </IconButton>
          </div>
          <div className={`${classes.menu} ${isOpen ? classes.isOpen : ''}`}>
            <Typography variant="subtitle1" color="inherit" className={`${classes.menuItem} ${classes.close}`} onClick={() => chgOpen()}>X</Typography>
            <Typography variant="subtitle1" color="inherit" className={classes.menuItem}>Movies</Typography>
            <Typography variant="subtitle1" color="inherit" className={classes.menuItem}>TV Series</Typography>
            <IconButton edge="start" color="inherit" className={`${classes.menuItem} ${classes.search}`} aria-label="search" onClick={() => chgSearchOpen()}>
              <SearchIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <div className={`${classes.searchContainer} ${isSearch ? classes.searchOpen : ''}`}>
          
          <div className={classes.searchBox}>                
            <Typography variant="subtitle1" color="inherit" className={`${classes.menuItem} ${classes.close}`} onClick={() => chgSearchOpen()}>X</Typography>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  onChange={(e) => setSearch(e.target.value)}
                  inputProps={{ 'aria-label': 'search' }}
                />
                <div className={classes.searchIcon} onClick={() => chgSearch()}>
                  <SearchIcon />
                </div>
          </div>
      </div>
    </div>
  );
}
