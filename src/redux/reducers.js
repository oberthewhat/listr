import { combineReducers } from 'redux'




const place = (state = [], action) => {
	switch (action.type) {
		case 'FETCH_PLACE':
			// console.log('reducers', state)
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



export default combineReducers({ place, coords })