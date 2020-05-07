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

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
// 		fontWeight: theme.typography.fontWeightRegular,
// 	},
// 	item: {
// 		width: '100%',
// 		display: 'flex',

// 	},
// 	voter: {
// 		backgroundColor: 'lightgray',
// 		display: 'flex',
// 	},
// 	paper: {
// 		width: '75%',
// 		textAlign: 'center',
// 	},
// 	paperGrid: {
// 		display: 'flex',
// 		justifyContent: 'center'
// 	}
// }));




const Listings = (props) => {
	// const classes = useStyles();
	console.log('listings component', props.place[0])

  return (
    <div className='listingsRoot'>
			{props.place.map((rest, idx) => (
		
		   <div key={idx}>{rest["name"]}</div>

			))}

    </div>
  );
}

export default Listings