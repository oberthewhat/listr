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

export const getCoords = (coords) => {
	console.log("actions", coords)  // checking actions 
	return {
		type: "GET_COORDS",
		value: coords
	}
}

export const getPlace = (lat, lon, type) => {
	console.log('actions lat', lat)
	console.log('actions lon', lon)
	console.log('actions type', type)

	const proxy = "https://cors-anywhere.herokuapp.com/"
  const yelpAPI = `https://api.yelp.com/v3/businesses/search?term=${type}&latitude=${lat}&longitude=${lon}&limit=20`

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