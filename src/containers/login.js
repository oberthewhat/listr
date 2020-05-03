import { connect} from 'react-redux'
import LogIn from '../components/login';
import { userLogIn } from "../redux/actions";

const mapDispatchToProps = (dispatch) => {
	return {
			userLogIn: (user) => dispatch(userLogIn(user))
	}
}
export default connect(null, mapDispatchToProps)(LogIn)