import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FormDialog from '../containers/login'
import { Link } from 'react-router-dom'

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
    fontFamily: "'Open Sans', sans-serif",
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
        <Toolbar className={classes.root} border={0}>
          <Typography variant="h6" className={classes.title}>
            <Link id="listrTitle" to="/">
            Listr 
            </Link>
          </Typography>
{/* this opens the dialog for log in */}
          <FormDialog /> 
        </Toolbar>
      </AppBar>
    </div>
  );
}