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
import CircularProgress from '@material-ui/core/CircularProgress';

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
	},

}));

const Listings = (props) => {


	const classes = useStyles();
	let yelpPlaces = []

	yelpPlaces = props.place.map(d => {
		return Object.assign(d, { vote: 0 })

	})


	var [count, setCount] = useState(0)
	var [restID, setID] = useState('')
	const [data, setData] = useState([]);

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
				'accept': 'application/json'
			},
			body: JSON.stringify(newVoteTotal)
		});
		let result = await response.json();
		console.log("fetch result", result)
	}

	///////////////////          VOTE BUTTON HANDLER        //////////////


	async function handleVoteButton(e) {

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
		}

		let decrementer = () => {
			setCount(count = targetRest[0].vote_total - 1)
		}

		//////////  NEW VOTE   /////////////////
		if (targetRest.length == 0) {
			console.log(e.currentTarget.id)
			if (e.currentTarget.value === "upVote") {
				setCount(count = 1)
			}
			else if (e.currentTarget.value === "downVote") {
				setCount(count = -1)
			}
			let newVoteTotal = {
				vote_total: count,
				restaurant_id: e.currentTarget.id
			};
			voteFetch(newVoteTotal, "POST")
			fetchData()
			return;
		}

		////////////////    OLD VOTE     /////////////////////////


		if (targetRest[0].restaurant_id) {
			if (e.currentTarget.value === "upVote") {
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
		if (yelpPlaces.length === 0) {
			console.log("empty")
		} else {
			for (let i = 0; i < data.length; i++) {
				if (restaurant.id === data[i].restaurant_id) {
					return restaurant.vote = data[i].vote_total
				}
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

	if (yelpPlaces.length === 0) {
		return (
			<div className="loadingDiv">
				<CircularProgress className="progress" color="inherit" />
			</div>)
	} else {
		return (
			<div className={classes.root}>
				{console.log("data : ", data),
					console.log("yelpPlaces : ", yelpPlaces)}
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
									<div className='itemHeadingText' id="score">Listr Score: {rest.vote}</div>
									<div className='itemHeadingText' id='distance'>{Number(getMiles(rest.distance).toFixed(2))} Miles from you!</div>
									<div className='itemHeadingText' id='distanceMobile'>{Number(getMiles(rest.distance).toFixed(2))} Miles</div>
								</div>

							</ExpansionPanelSummary>
							<ExpansionPanelDetails>
								<Typography className="detailsList">
									<li>Phone : {rest.display_phone}</li>
									<li>Address : {rest.location.address1}.
								 {rest.location.city}, {rest.location.state}</li>
									<li>Price range : {price(rest.price)}</li>
									<li id="scoreMobile">Listr Score: {rest.vote}</li>
								</Typography>
							</ExpansionPanelDetails>
						</ExpansionPanel>
					</div>
				))}
			</div>
		)
	}
}


export default Listings