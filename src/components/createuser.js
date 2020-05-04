import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export default function CreateUser() {

	const [open, setOpen] = React.useState(false);

	const [values, setValues] = React.useState({
		amount: '',
		password: '',
		weight: '',
		weightRange: '',
		showPassword: false,
	})

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

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
						Create an account to start voting on a restaraunt
          </DialogContentText>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Username"
						type="username"
						fullWidth
					/>
					<TextField
						margin="dense"
						id="email"
						label="email"
						type="email"
						fullWidth
					/>
					<TextField
						id="password1"
						label="Password"
						type="password"
						autoComplete="current-password"
						fullWidth
					/>
					<TextField
						id="password2"
						label="Confirm Password"
						type="password"
						autoComplete="current-password"
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					{/* MAKE THIS BUTTON HANDLE ADDING INFO TO MONGO */}
					<Button onClick={handleClose} color="primary">
						Create Account
          </Button>
					<Button onClick={handleClose} color="primary">
						Cancel
          </Button>

					{/* MAKE THIS BUTTON HANDLE CREATE ACCOUNT */}
				</DialogActions>
			</Dialog>
		</div>
	);
}
