import { connect} from 'react-redux'
import LogIn from '../components/login';
import { loggedIn } from "../redux/actions";


const mapStateToProps = (state) => {
	// console.log('in listing container',state.place)
	return {

			logStatus: state.logStatus
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
			loggedIn: (status) => dispatch(loggedIn(status))

	}
}
export default connect(mapStateToProps, mapDispatchToProps)(LogIn)