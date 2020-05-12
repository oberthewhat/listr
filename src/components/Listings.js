import React, { useState } from 'react';
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

var [count, setCount] = useState(0)
var [restID, setID] = useState('')



let incrementer = () => {
	setCount(count + 1)
}

let decrementer = () => {
	setCount(count - 1)
}

	async function voteFetch(e) {
		
    
		let id = e.currentTarget.id
		console.log("id after click :", id)
		console.log("target ", e.currentTarget.value)
		setID(restID = id)
	

		let targetRest = props.place.filter(restaurant => {
		return	restaurant.id === id
		})

	//If the vote exists in the DB
    if(targetRest.vote) {
	  	if(e.currentTarget.value === "upVote") {
			incrementer()} 
			  else if(e.currentTarget.value === "downVote") {
		    decrementer()
				}
				let newVoteTotal = {
					vote_total: count,
					restaurant_id: restID
				};
				console.log("new vote total: ", newVoteTotal)
		
				let response = await fetch('http://localhost:8080/listings', {
					method: "PUT",
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(newVoteTotal)
				});
		
				let result = await response.json();
				console.log(result)
	  }
		//If there are no votes in the DB
		if(!targetRest.vote) {

	  	if(e.currentTarget.value === "upVote") {
			incrementer()		} 
		  	else if(e.currentTarget.value === "downVote") {

				decrementer()		
				}
				let newVoteTotal = {
					vote_total: count,
					restaurant_id: restID
				};
				console.log("new vote total: ", newVoteTotal)
		
				let response = await fetch('http://localhost:8080/listings', {
					method: "POST",
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(newVoteTotal)
				});
		
				let postResult = await response.json();	
				console.log(postResult)			
		}


	}

	const classes = useStyles();
	function getMiles(meters) {
		return meters * 0.000621371192;
	}

	function price(priceRange) {
		if (priceRange === "$$$") {
			return "expensive"
		} else if (priceRange === "$$") {
			return "average"
		} else {
			return "cheap"
		}
	}

	const each = props.place
	return (
		<div className={classes.root}>
			{each.map((rest, i) => (
				<div className='listItem' key={i}>
					<Box boxShadow={2} className={classes.voter}>
						<Button id={rest.id} value="upVote" onClick={voteFetch}  >
							<ArrowUpwardIcon/>
						</Button>
						<Button id={rest.id} value="downVote" onClick={voteFetch} >
							<ArrowDownwardIcon/>
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
							<Typography className="detailsList">
								<li>Phone : {rest.display_phone}</li>
								<li>Address : {rest.location.address1}.
								 {rest.location.city}, {rest.location.state}</li>
								<li>Price range : {price(rest.price)}</li>
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
				</div>


			))}

		</div>
	);
}

export default Listings