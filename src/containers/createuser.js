import { connect } from  'react-redux'
import CreateUser from '../components/createuser';
import { newUser } from '../redux/actions';


const mapStateToProps = (state) => {
	return {

			logStatus: state.logStatus
	}
}



const mapDispatchToProps = (dispatch) => {
	return {
		newUser: (newbie) => dispatch(newUser(newbie))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateUser)