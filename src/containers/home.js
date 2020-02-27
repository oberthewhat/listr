import { connect } from 'react-redux'
import Home from '../components/home'


const mapStateToProps = (state) => {
	return {
			user: state.user,
			place: state.place,
			cuisine: state.cuisine
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 			removePlace: (index) => dispatch(removePlace(index))
// 	}
// }

export default connect(mapStateToProps)(Home)