import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function CreateUser(props) {

  const [open, setOpen] = useState(false);
	const [user, setUser] = useState({
		email: '',
		username: '',
		password: ''
});

function handleChange(e) {
	const { id, value } = e.target;
	setUser(user => ({ ...user, [id]: value }));
}


async function handleSubmit (e){
	console.log(user.username)

	let newUser = {
		email: user.email,
		username: user.username,
		password: user.password
	};

	let response = await fetch('https://restaurantlistr.herokuapp.com/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(newUser)
	});
	
	let result = await response.text();
	console.log(result)
	
 window.alert('Account Created!')
 setOpen(false)
	}


	

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button id="createButton" variant="outlined" color="inherit" onClick={handleClickOpen}>
				Create one!
      </Button>
			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Create Account</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Create an account to start voting on restaurants
          </DialogContentText>
					<TextField
						autoFocus
						onChange = {handleChange}
						margin="dense"
						id="username"
						label="Username"
						type="username"
						value={user.username}
						fullWidth
					/>
					<TextField
						onChange = {handleChange}
						margin="dense"
						id="email"
						label="email"
						type="email"
						value={user.email}
						fullWidth
					/>
					<TextField
						onChange = {handleChange}
						id="password"
						label="Password"
						type="password"
						autoComplete="current-password"
						value={user.password}
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
{/* THIS BUTTON SHOULD MATCH THE USER ENTRY FOR THEIR PASSWORDS TO CONFIRM THAT THEY MATCH, AND CONFIRM THAT NO OTHER USER HAS SAME INFO. THEN DISPLAY A DIALOG THAT SAYS ACCOUNT CREATED */}
					<Button onClick={handleSubmit} color="primary">
						Create Account
          </Button>
					<Button onClick={handleClose} color="primary">
						Cancel
          </Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
