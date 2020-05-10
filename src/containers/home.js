import { connect } from 'react-redux'
import Home from '../components/home'
import { getPlace, getCoords } from '../redux/actions'



const mapStateToProps = (state) => {
	return {
			user: state.user,
			place: state.place,
			coords: state.coords
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
			getPlace: (lat, lon, type) => dispatch(getPlace(lat, lon, type)),
			getCoords: (coords) => dispatch(getCoords(coords))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)