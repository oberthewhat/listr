import { connect } from 'react-redux'
import Listings from '../components/Listings'


const mapStateToProps = (state) => {
	return {
			user: state.user,
			place: state.place,
			cuisine: state.cuisine
	}
}


export default connect(mapStateToProps)(Listings)