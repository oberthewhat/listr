import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Button } from '@material-ui/core';
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

	let yelpPlaces = props.place.map(d => {
		return Object.assign(d, { vote: 0 })

	})


	var [count, setCount] = useState(0)
	var [restID, setID] = useState('')
	const [data, setData] = useState();

	const fetchData = async () => {
			const result = await axios(
				'http://localhost:8080/listings',
			);

			setData(result.data);
		};

	useEffect(() => {
	fetchData();
	}, []);

	const voteFetch = async function (newVoteTotal, fetchType) {

		let response = await fetch('http://localhost:8080/listings', {
			method: fetchType,
			headers: {
				'Content-Type': 'application/json',
				'accept': 'appllication/json'
			},
			body: JSON.stringify(newVoteTotal)
		});
		let result = await response.json();
		console.log("fetch result", result)
	}

	///////////////////          VOTE BUTTON HANDLER        //////////////


	async function handleVoteButton(e) {
		console.log("data from voted fetch on click ", data)

		let id = e.currentTarget.id
		setID(restID = id)

		let targetRest = data.filter(restaurant => {
			if (restaurant.restaurant_id === id) {
				return restaurant.restaurant_id
			}
			else {
				return false
			}
		})

		let incrementer = () => {
			setCount(count = targetRest[0].vote_total + 1)
			console.log(targetRest)
		}

		let decrementer = () => {
			setCount(count = targetRest[0].vote_total - 1)
		}
		console.log("target Rest", data)


		//////////  NEW VOTE   /////////////////
		if (targetRest.length == 0) {
			console.log(e.currentTarget.id)
			if (e.currentTarget.value === "upVote") {
				console.log("Count after upvote Pressed on new vote ", count)
				setCount(count = 1)
			}
			else if (e.currentTarget.value === "downVote") {
				setCount(count = -1)
			}
			let newVoteTotal = {
				vote_total: count,
				restaurant_id: e.currentTarget.id
			};
			console.log("newVoteTotal", newVoteTotal)
			voteFetch(newVoteTotal, "POST")
			fetchData()
			return;
		}

		////////////////    OLD VOTE     /////////////////////////


		if (targetRest[0].restaurant_id) {
			if (e.currentTarget.value === "upVote") {
				console.log('old vote upvote pressed')
				incrementer()
				targetRest[0].vote_total = count
			}
			else if (e.currentTarget.value === "downVote") {
				decrementer()
				targetRest[0].vote_total = count
			}
			let newVoteTotal = {
				vote_total: count,
				restaurant_id: restID
			};
			console.log("oldVoteTotal", newVoteTotal)
			voteFetch(newVoteTotal, "PUT")
		}


	}

	/////////        get miles for details        //////////////////////////////

	function getMiles(meters) {
		return meters * 0.000621371192;
	}

	/////////////      get price range for details      ////////////////////////

	function price(priceRange) {
		if (priceRange === "$$$") {
			return "expensive"
		} else if (priceRange === "$$") {
			return "average"
		} else {
			return "cheap"
		}
	}


	/////////   SORT FOR LIST RENDER BASED ON VOTES    ////////////////////

	yelpPlaces.map(restaurant => {
		for (let i = 0; i < data.length; i++) {
			if (restaurant.id === data[i].restaurant_id) {
				return restaurant.vote = data[i].vote_total
			}
		}
	})

	function compare(a, b) {
		const restA = a.vote;
		const restB = b.vote;

		let comparison = 0;
		if (restA > restB) {
			comparison = -1;
		} else if (restA < restB) {
			comparison = 1
		}
		return comparison
	}


	yelpPlaces.sort(compare)
	/////////////////////////////        RETURN    ///////////////////////////////////////////


	if(props.place.length == 0) {
    return <div></div>
	} else {
	return (
		<div className={classes.root}>
			{yelpPlaces.map((rest, i) => (
				<div className='listItem' key={i}>
					<Box boxShadow={2} className={classes.voter}>
						<Button id={rest.id} value="upVote" onClick={handleVoteButton}  >
							<ArrowUpwardIcon />
						</Button>
						<Button id={rest.id} value="downVote" onClick={handleVoteButton} >
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
								<div className='itemHeadingText'>Listr Score: {rest.vote}</div>
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
	)};
}

export default Listings