import React, { useState, useEffect } from 'react';
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
import axios from "axios"

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

///////set up hooks
var [count, setCount] = useState(0)
var [restID, setID] = useState('')
const [data, setData] = useState({ hits: [] });
 
useEffect(() => {
	const fetchData = async () => {
		const result = await axios(
			'http://localhost:8080/listings',
		);

		setData(result.data);
	};

	fetchData();
}, []);

console.log(data)

/////////////////////////////vote fecth when vote button is clicked

	async function voteFetch(e) {

		let id = e.currentTarget.id
		setID(restID = id)
		
	let incrementer = () => {
	setCount(count = targetRest[0].vote + 1)
}

let decrementer = () => {
	setCount(count = targetRest[0].vote - 1)
}


/////////////filter out only the places where the ID matches the one clicked
		let targetRest = props.place.filter(restaurant => {
    return	restaurant.id === id

		})

	//If the vote exists in the DB This needds to be tied to the DB fetch rather than targetRest otherwise it starts a duplicate

    if(targetRest[0].vote) {
	  	if(e.currentTarget.value === "upVote" && e.currentTarget.id === targetRest[0].id) {
			incrementer()
			Object.assign(targetRest[0], {"vote": count})
			console.log("vote does exist upvote pressed",targetRest[0].id,"has :", targetRest[0].vote)
		} 
			  else if(e.currentTarget.value === "downVote" && e.currentTarget.id === targetRest[0].id) {
				decrementer()
				Object.assign(targetRest[0], {"vote": count})
				console.log("vote does exist downvote pressed",targetRest[0].id,"has :", targetRest[0].vote)

				}
				let newVoteTotal = {
					vote_total: count,
					restaurant_id: restID
				};
		
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
		if(!targetRest[0].vote) {

	  	if(e.currentTarget.value === "upVote") {
			incrementer()	
			Object.assign(targetRest[0], {"vote": 1})
			console.log("NO VOTE EXISTS upvote pressed",targetRest[0].id,"has :", targetRest[0].vote)
		} 
		  	else if(e.currentTarget.value === "downVote") {

				decrementer()	
				Object.assign(targetRest[0], {"vote": -1})
				console.log("NO VOTE EXISTS downvote pressed",targetRest[0].id,"has :", targetRest[0].vote)
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
		
				let result = await response.json();	
				console.log(result)			
		}


	}

/////////get miles for details

	function getMiles(meters) {
		return meters * 0.000621371192;
	}

//////////get price range for details

	function price(priceRange) {
		if (priceRange === "$$$") {
			return "expensive"
		} else if (priceRange === "$$") {
			return "average"
		} else {
			return "cheap"
		}
	}


/////////bring in props from fetch action
//each = YELP API
	const each = props.place
	console.log(data)
	each.map(restaurant => {
		for(let i = 0; i < data.length; i++) {
			if(restaurant.id === data[i].restaurant_id) {
				restaurant.votes = data[i].vote_total
			}	
		}
	})

	function compare(a,b){
		const restA = a.votes;
		const restB = b.votes;

		let comparison = 0;
		if(restA > restB){
		comparison = -1;
		} else if (restA < restB){
		comparison = 1
		}
		return comparison
		}

		each.sort(compare)

		console.log("sorted ",each)

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