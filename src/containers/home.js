import { connect } from 'react-redux'
import Home from '../components/home'
import { getPlace, getCords } from '../redux/actions'



const mapStateToProps = (state) => {
	return {
			user: state.user,
			place: state.place,
			cords: state.cords
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
			getPlace: (place) => dispatch(getPlace(place)),
			getCords: (cords) => dispatch(getCords(cords))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)