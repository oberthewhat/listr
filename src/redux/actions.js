export const userLogIn = (username) => {
	return {
		type: "LOGIN",
		value: username
	}
}

export const newUser = (text) => {
	return {
		type: "CREATE_USER",
		text
	}
}

export const getCords = (cords) => {
	console.log("actions", cords)  // checking actions 
	return {
		type: "GET_CORDS",
		value: cords
	}
}

export const getPlace = (lat, lon) => {

	const proxy = "https://cors-anywhere.herokuapp.com/"
  const yelpAPI = 'https://api.yelp.com/v3/businesses/search?term=pizza&latitude=30.054809600000002&longitude=-97.8157568&limit=50'

	return (dispatch) => {
		fetch(proxy + yelpAPI, { 
			headers: {
				Authorization: "Bearer mTKaVgSrIJqL2gnul1zTNMBssMeAhJXNXjLDWT7BFwwPqefdbnToL00zIoPsqWd9PubnMaAJ70cYAFjFKcWv5K5Lwqhb_34czjeRarrGwIM8JPFZSWP95U_m85WzXnYx"
			}
		})
			.then(res => res.json()
				.then(response => {
					const action = {
						type: 'FETCH_PLACE',
						value: response.businesses
					}
					dispatch(action)
				}
				)
			)
	}
}