import React from 'react';
import CardItem from './CardItem'
import { makeStyles } from '@material-ui/core/styles';
import {     
    Grid,
    Typography
 } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,    
    marginTop: 12,
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginTop: 16,
      padding: 12,
    },    
  },
  listItem:{
      display: 'flex',            
      overflowX: 'auto',      
      marginTop: 24,
      '&::-webkit-scrollbar': {        
        display: 'none'
      }
  },
  recomm:{
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    marginTop: 24,
    '&::-webkit-scrollbar': {        
      display: 'none'
    }
  }
}));

export default function ListItem({title, type, datas, list}) {
  const classes = useStyles();  
  const number = datas;
  
  
  return (
    <div className={classes.root}>
      <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5">{title}</Typography>
          </Grid>          
          <Grid item xs={12}>            
            <div className={`${list === 'recommendation' ? classes.recomm : classes.listItem}`}>
              {
                
                datas ? 
                  number.results ? 
                  number.results.map((data, index) =>
                    <CardItem key={index} type={type} data={data}>{number}</CardItem>
                  )
                  :
                  number.cast.map((data, index) =>
                    <CardItem key={index} type={type} data={data}>{number}</CardItem>
                  )
                : 'something here'                
              }        
            </div>
          </Grid>
      </Grid>            
    </div>
  );
}
