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
	function getMiles(meters) {
		return meters * 0.000621371192;
	}

	function price(priceRange) {
		if(priceRange === "$$$") {
			return "expensive"
		} else if(priceRange === "$$") {
			return "average"
		} else {
			return "cheap"
		}
	}

	const each = props.place
	console.log('each', each)
	return (
		<div className={classes.root}>
			{each.map((rest, i) => (
				<div className='listItem' key={i}>
					<Box boxShadow={2} className={classes.voter}>
						<Button >
							<ArrowUpwardIcon />
						</Button>
						<Button>
							<ArrowDownwardIcon />
						</Button>
					</Box>
					<ExpansionPanel className="expansionPanel">
						<ExpansionPanelSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<div className="itemHeading">
								<div className='itemHeadingText'>{rest.name}</div>
								<div className='itemHeadingText'>{Number(getMiles(rest.distance).toFixed(2))} Miles from you!</div>
								</div>

						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								Phone : {rest.display_phone}
								Address : {rest.location.display_address[0]} 
								{rest.location.display_address[1]}
								Price range : {price(rest.price)}
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
				</div>


			))}

		</div>
	);
}

export default Listings