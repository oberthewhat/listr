import { combineReducers } from 'redux'




const place = (state = [], action) => {
	switch (action.type) {
		case 'FETCH_PLACE':
			
			return [action.value]
		default:
			return state
	}
}

const cords = (state = [], action) => {
	switch (action.type) {
		case 'GET_CORDS':
	
			return [action.cords]
			
		default:
			return state
	}		
}



export default combineReducers({ place, cords })