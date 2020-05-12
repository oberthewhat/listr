export const userLogIn = (username) => {
	return {
		type: "LOGIN",
		value: username
	}
}

export const updateVote = (voteTotal) => {
	return{
		type: "VOTER",
		value: voteTotal
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


	const proxy = "https://cors-anywhere.herokuapp.com/"
  const yelpAPI = `https://api.yelp.com/v3/businesses/search?term=${type}&latitude=${lat}&longitude=${lon}&limit=20`

	return (dispatch) => {
		fetch(proxy + yelpAPI, { 
			headers: {
				Authorization: "Bearer p7pqhAhOBOUl2TTVv5dv3wG5aJeF5B88Omtb6vTw_yQv9qT75lLeB_0KnVsG__KXNTBte05YWGixZixSprR1XpLuL4QCuVMhHZ4ydate1TEBdHCpSluwzkBb2ja6XnYx"
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