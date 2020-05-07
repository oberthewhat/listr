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

// zomato fucks

// https://developers.zomato.com/api/v2.1/search?count=25&lat=30.059185300000003&lon=-97.8141421&radius=2000&cuisines=pizza



// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&rankby=distance&type=muse&key=AIzaSyB8yc8dpOl3hsMFyctn39j3pOMferzdE64

//location bias search 



// https://maps.googleapis.com/maps/api/place/textsearch/json?input=pizza&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@30.054809600000002,-97.8157568&key=AIzaSyB8yc8dpOl3hsMFyctn39j3pOMferzdE64

//nearby search

// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&rankby=distance&query=pizza&key=AIzaSyB8yc8dpOl3hsMFyctn39j3pOMferzdE64

// https://maps.googleapis.com/maps/api/place/textsearch/json?query=pizza&locationbias=circle:2000@ipbias&key=AIzaSyB8yc8dpOl3hsMFyctn39j3pOMferzdE64

// https://maps.googleapis.com/maps/api/place/textsearch/json?input=pizza&inputtype=textquery&fields=formatted_address,name&locationbias=circle:2000@ipbias&key=AIzaSyB8yc8dpOl3hsMFyctn39j3pOMferzdE64

export const getPlace = (lat, lon) => {


	const proxyUrl = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?input=pizza&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@30.054809600000002,-97.8157568&key=AIzaSyB8yc8dpOl3hsMFyctn39j3pOMferzdE64`

	const zomatoAPI = `https://developers.zomato.com/api/v2.1/search?q=burgers&count=20&lat=30.054809600000002&lon=-97.8157568&radius=0`

	return (dispatch) => {
		fetch(zomatoAPI, { 
			headers: {
				"user-key":"5acb8cd02eec7af3fc19b1d95b41070d"
			}
		})
			.then(res => res.json()
				.then(response => {
					console.log('actions', response)
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