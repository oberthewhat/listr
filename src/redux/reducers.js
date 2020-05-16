import { combineReducers } from 'redux'

const logStatus = (state = false, action) => {
	switch(action.type) {
		case 'LOGGED_IN':
			return [action.value]
			default:
			return state
	}
}


const place = (state = [], action) => {
	switch (action.type) {
		case 'FETCH_PLACE':
			return [...action.value]
		default:
			return state
	}
}

const coords = (state = [], action) => {
	switch (action.type) {
		case 'GET_COORDS':
	
			return [action.cords]
			
		default:
			return state
	}		
}



export default combineReducers({ place, coords, logStatus })