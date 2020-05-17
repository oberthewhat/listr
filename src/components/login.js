import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormDialog from '../containers/createuser';

export default function LogIn(props) {

	const [open, setOpen] = React.useState(false);
	const [user, setLogin] = useState({
		username: '',
		password: ''
	});

	function handleChange(e) {
		const { id, value } = e.target;
		setLogin(user => ({ ...user, [id]: value }));
	}


	async function handleSubmit(e) {
		if (props.logStatus) {
			props.loggedIn(false)
			setOpen(false)
		} else {
			let response = await fetch('https://restaurantlistr.herokuapp.com/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(user)
			});

			let result = await response.text();
			console.log(result)
			if (result.token) {
				props.loggedIn(true)
				window.alert('You are now logged in!')
				setOpen(false)
			}
		}
	}
		let innerText= ''
	const buttonText = () => {
		if (props.logStatus === true) {
			return innerText = 'Sign Out'
		} else {
			return innerText = 'sign in to vote!'
		}
	}

	const handleClickOpen = () => {
		if (props.logStatus === true) {
			props.loggedIn(false)
			setOpen(false)
		} else {
			setOpen(true);
		}
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button variant="outlined" color="inherit" onClick={handleClickOpen}>
				{buttonText()}
			</Button>
			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Sign In</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Log in here to vote a restaurant up or down.
          </DialogContentText>
					<TextField
						autoFocus
						margin="dense"
						id="username"
						onChange={handleChange}
						value={user.username}
						label="Username"
						type="username"
						fullWidth
					/>
					<TextField
						id="password"
						onChange={handleChange}
						label="Password"
						type="password"
						autoComplete="current-password"
						value={user.password}
						fullWidth
					/>

				</DialogContent>
				<DialogActions>
					{/* MAKE THIS BUTTON HANDLE SIGN IN */}
					<Button onClick={handleSubmit} color="primary">
						Sign In
          </Button>
					<Button onClick={handleClose} color="primary">
						Cancel
          </Button>

					{/* MAKE THIS BUTTON HANDLE CREATE ACCOUNT */}
				</DialogActions>

				<DialogActions>
					If you do not have an account,
           <FormDialog />
				</DialogActions>
			</Dialog>
		</div>
	);
}

