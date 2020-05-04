import { connect } from  'react-redux'
import CreateUser from '../components/createuser';
import { newUser } from '../redux/actions';

const mapDispachToProps = (dispach) => {
	return {
		newUser: (newbie) => dispach(newUser(newbie))
	}
}
export default connect(null, mapDispachToProps)(CreateUser)