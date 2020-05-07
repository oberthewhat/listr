import { connect } from  'react-redux'
import CreateUser from '../components/createuser';
import { newUser } from '../redux/actions';

const mapDispatchToProps = (dispatch) => {
	return {
		newUser: (newbie) => dispatch(newUser(newbie))
	}
}
export default connect(null, mapDispatchToProps)(CreateUser)