export const userLogIn = (username) => {
	return {
		type:"LOGIN",
		value: username
	}
}

export const newUser = (text) => {
	return {
		type:"CREATE_USER",
		text
	}
}