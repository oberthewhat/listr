import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {
	FaPizzaSlice,
	FaHamburger
} from 'react-icons/fa'
import {
	GiNoodles,
	GiSandwich,
	GiCupcake
} from "react-icons/gi"
import { BsEggFried } from "react-icons/bs";
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		marginTop: 40,
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
		<div className='homeBody'>
			<div id='chooseHeading'>Choose a cuisine</div>
			<div className="homeMain">
			<div className="iconContainer">
					<Button><FaPizzaSlice className='icons' /></Button>
					<Button><FaHamburger className='icons' /></Button>
					<Button><GiNoodles className='icons' /></Button>
					<Button><BsEggFried className='icons' /></Button>
					<Button><GiSandwich className='icons' /></Button>
					<Button><GiCupcake className='icons' /></Button>
					<Button><BsEggFried className='icons' /></Button>
					<Button><BsEggFried className='icons' /></Button>
				</div>
			</div>
		</div>
	);
}


export default Home