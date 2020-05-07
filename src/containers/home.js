import { connect } from 'react-redux'
import Home from '../components/home'
import { getPlace } from '../redux/actions'


const mapStateToProps = (state) => {
	return {
			user: state.user,
			place: state.place,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
			getPlace: (place) => dispatch(getPlace(place))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)