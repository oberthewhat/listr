import { connect} from 'react-redux'
import LogIn from '../components/login';
import { userLogIn, loggedIn } from "../redux/actions";

const mapDispatchToProps = (dispatch) => {
	return {
			userLogIn: (user) => dispatch(userLogIn(user)),
			loggedIn: (status) => dispatch(loggedIn(status))

	}
}
export default connect(null, mapDispatchToProps)(LogIn)