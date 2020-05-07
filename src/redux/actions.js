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

//location bias search 

// https://maps.googleapis.com/maps/api/place/textsearch/json?input=pizza&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@30.054809600000002,-97.8157568&key=AIzaSyB8yc8dpOl3hsMFyctn39j3pOMferzdE64

// https://maps.googleapis.com/maps/api/place/textsearch/json?query=pizza&locationbias=circle:2000@ipbias&key=AIzaSyB8yc8dpOl3hsMFyctn39j3pOMferzdE64

// https://maps.googleapis.com/maps/api/place/textsearch/json?input=pizza&inputtype=textquery&fields=formatted_address,name&locationbias=circle:2000@ipbias&key=AIzaSyB8yc8dpOl3hsMFyctn39j3pOMferzdE64

export const getPlace = (lat, lon) => {


	const proxyUrl = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?input=pizza&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@30.054809600000002,-97.8157568&key=AIzaSyB8yc8dpOl3hsMFyctn39j3pOMferzdE64`

	return (dispatch) => {
		fetch(proxyUrl)
			.then(res => res.json()
				.then(response => {
					console.log('actions', response.request)
					const action = {
						type: 'FETCH_PLACE',
						value: response.results,
					}
					dispatch(action)
				}
				)
			)
	}
}