

export const updateVote = (voteTotal) => {
	return {
		type: "VOTER",
		value: voteTotal
	}
}

export const loggedIn = (status) => {
	return {
		type: "LOGGED_IN",
		value: status
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


	const apiKey = "p7pqhAhOBOUl2TTVv5dv3wG5aJeF5B88Omtb6vTw_yQv9qT75lLeB_0KnVsG__KXNTBte05YWGixZixSprR1XpLuL4QCuVMhHZ4ydate1TEBdHCpSluwzkBb2ja6XnYx"
	const proxy = "https://cors-anywhere.herokuapp.com/"
	const yelp = `https://api.yelp.com/v3/businesses/search?term=${type}&latitude=${lat}&longitude=${lon}&limit=20&categories=restaurant`

	return (dispatch) => {
		fetch(proxy + yelp, { 
			headers: {
				Authorization: `Bearer ${apiKey}`
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