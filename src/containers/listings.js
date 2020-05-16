import { connect } from 'react-redux'
import Listings from '../components/Listings'
import { getPlace, getCoords, loggedIn} from '../redux/actions'

 
const mapStateToProps = (state) => {
	// console.log('in listing container',state.place)
	return {
			getUser: state.user,
			place: state.place,
			coords: state.coords,
			logStatus: state.logStatus
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
			getPlace: (place) => dispatch(getPlace(place)),
			getCoords: (coords) => dispatch(getCoords(coords)),
			loggedIn: (logStatus) => dispatch(loggedIn(logStatus))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Listings)