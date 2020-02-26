import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import { borders } from '@material-ui/system';


const useStyles = makeStyles(theme => ({
  root: {
		flexGrow: 1,
		backgroundColor: 'orangered',
		height: 80,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
		flexGrow: 6,
		fontSize: 40,
		fontFamily: "",
	},
	mood: {
		marginRight: 10,
	}
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.root} borderBottom={0}>
          <Typography variant="h6" className={classes.title}>
            ListR
          </Typography>
          <Button color="inherit">
						<MoodBadIcon className={classes.mood}/>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}