import { connect } from 'react-redux'
import Listings from '../components/Listings'
import { getPlace } from '../redux/actions'

 
const mapStateToProps = (state) => {
	// console.log('in listing container',state.place)
	return {
			getUser: state.user,
			place: state.place,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
			getPlace: (place) => dispatch(getPlace(place))

	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Listings)