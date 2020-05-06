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

export const getPlaces = (type) => {
	return (dispatch) => {
		fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?input=A${type}&inputtype=textquery&fields=formatted_address,name&locationbias=circle:2000@ipbias&key=AIzaSyB8yc8dpOl3hsMFyctn39j3pOMferzdE64`)
			.then(res => res.json()
				.then(response => {
					const action = {
						type: 'FETCH_RESTAURANTS',
						value: response.results
					}
					dispatch(action)
				}))
	}}