import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Button from '@material-ui/core/button'
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
	item: {
		width: '100%',
		display: 'flex',

	},
	voter: {
		backgroundColor: 'lightgray',
		display: 'flex',
	},
	paper: {
		width: '75%',
		textAlign: 'center',
	},
	paperGrid: {
		display: 'flex',
		justifyContent: 'center'
	}
}));




const Listings = (props) => {
	const classes = useStyles();
  console.log('props in listings component ', props.businesses)
 console.log('listings props ', props)
  return (
    <div className={classes.root}>

			<div className={classes.item}>
				<div className={classes.voter} >
					<Box boxShadow={2} className={classes.voter}>
						<Button >
							<ArrowUpwardIcon/>
						</Button>
						<Button>
							<ArrowDownwardIcon/>
						</Button>
					</Box>
					</div>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
					
          <Typography className={classes.heading}>Thundercloud Subs</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
					ThunderCloud Subs is a neighborhood sub shop with a rich tradition of good-natured people serving fresh, fast, and healthy food in a quirky and fun atmosphere. 
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
		</div>
    </div>
  );
}

export default Listings