import { connect } from 'react-redux'
import Home from '../components/home'
import { getPlace, getCoords, loggedIn } from '../redux/actions'



const mapStateToProps = (state) => {
	return {
			user: state.user,
			place: state.place,
			coords: state.coords,
			logStatus: state.logStatus
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
			getPlace: (lat, lon, type) => dispatch(getPlace(lat, lon, type)),
			getCoords: (coords) => dispatch(getCoords(coords)),
			loggedIn: (logStatus) => dispatch(loggedIn(logStatus))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)