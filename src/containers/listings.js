import { connect } from 'react-redux'
import Listings from '../components/Listings'
import { getPlace, getCoords } from '../redux/actions'

 
const mapStateToProps = (state) => {
	// console.log('in listing container',state.place)
	return {
			getUser: state.user,
			place: state.place,
			coords: state.coords,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
			getPlace: (place) => dispatch(getPlace(place)),
			getCoords: (coords) => dispatch(getCoords(coords))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Listings)