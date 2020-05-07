import { combineReducers } from 'redux'




const place = (state = [], action) => {
	switch(action.type) {
			case 'FETCH_PLACE':
					return [action.value]
			default:
					return state
	}
}

export default combineReducers({ place })