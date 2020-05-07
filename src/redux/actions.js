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



// https://maps.googleapis.com/maps/api/place/textsearch/json?query=pizza&locationbias=circle:2000@ipbias&42.3675294,-71.186966&key=AIzaSyB8yc8dpOl3hsMFyctn39j3pOMferzdE64

export const getPlace = () => {

	const proxyUrl = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=pizza&locationbias=circle:2000@ipbias&42.3675294,-71.186966&key=AIzaSyB8yc8dpOl3hsMFyctn39j3pOMferzdE64"
	console.log('hello?')
	
	return (dispatch) => {
		fetch(proxyUrl)
			.then(res => res.json()
				.then(response => {
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