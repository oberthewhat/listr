import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  root: {
		flexGrow: 1,
		marginTop:40,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Home = (props) => {
  const classes = useStyles();


  return (
		<div>
		<Grid item xs={60} className={classes.paperGrid}>
		  <Paper className={classes.paper}>Welcome to ListR!<br/>
		Please rate each restaraunt based on a generalized opinion based on the whole dining experience. Vote up if you enjoyed, vote down if you did not
		  </Paper>
	  </Grid>
		<div className="iconContainer">
			
		</div>
	</div>
  );
}


export default Home