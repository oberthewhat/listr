import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {
	FaPizzaSlice,
	FaHamburger,
	FaFish
} from 'react-icons/fa'
import {
	GiNoodles,
	GiSandwich,
	GiCupcake,
	GiTacos,
	GiSteak
} from "react-icons/gi"
import { BsEggFried } from "react-icons/bs";
import ReactTooltip from "react-tooltip";

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			latitude: null,
			longitude: null
		};
		this.getLocation = this.getLocation.bind(this);
		this.getCoordinates = this.getCoordinates.bind(this);
	}

	getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
		} else {
			alert("geolocation not supported by this browser")
		}
	}

	getCoordinates(position) {
		console.log(position.coords)
		document.cookie="latitude="+position.coords.latitude;
		document.cookie="longitude="+position.coords.longitude; 
		this.setState({
			latitude: position.coords.latitude,
			longitude: position.coords.longitude
		})
	}

handleLocationError(error) {
	switch(error.code) {
    case error.PERMISSION_DENIED:
      alert( "User denied the request for Geolocation.")
      break;
    case error.POSITION_UNAVAILABLE:
      alert( "Location information is unavailable.")
      break;
    case error.TIMEOUT:
      alert( "The request to get user location timed out.")
      break;
    case error.UNKNOWN_ERROR:
      alert( "An unknown error occurred.")
			break;
			default:
			alert( "an unknown error occurred." )
  }

}

	render() {
		return (
			<div className='homeBody'>

				<div id='chooseHeading'>Choose a cuisine</div>
				<div className="homeMain">
					<div className="iconContainer">
						<Button id='pizza' data-tip='pizza' onClick={this.getLocation}><FaPizzaSlice className='icons' /></Button>
						<Button id='burger' data-tip='burgers' ><FaHamburger className='icons' /></Button>
						<Button id='asian' data-tip='asian' ><GiNoodles className='icons' /></Button>
						<Button id='breakfast' data-tip='breakfast' ><BsEggFried className='icons' /></Button>
						<Button id='sandwich' data-tip='sandwiches' ><GiSandwich className='icons' /></Button>
						<Button id='dessert' data-tip='bakery' ><GiCupcake className='icons' /></Button>
						<Button id='mexican' data-tip='mexican' ><GiTacos className='icons' /></Button>
						<Button id='seafood' data-tip='seafood' ><FaFish className='icons' /></Button>
						<Button id='steak' data-tip='steak' ><GiSteak className='icons' /></Button>
						<ReactTooltip />
					</div>
				</div>
				<div onLoad={this.getLocation}>coordinates: lat={this.state.latitude} long={this.state.longitude}
				</div>
			</div>

		)
	};
}


export default Home