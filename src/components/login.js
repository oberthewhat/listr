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

export default function LogIn() {
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
			<Button variant="outlined" color="inherit" onClick={handleClickOpen}>
				Sign in to vote
      </Button>
			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Sign In</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Log in here to vote a restaraunt up or down.
          </DialogContentText>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Username"
						type="email"
						fullWidth
					/>
					<Input
						autoFocus
						id="standard-adornment-password"
						label="Password"
						type={values.showPassword ? 'text' : 'password'}
						fullWidth
						value={values.password}
						onChange={handleChange('password')}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
								>
									{values.showPassword ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
						}
					/>
				</DialogContent>
				<DialogActions>
					{/* MAKE THIS BUTTON HANDLE SIGN IN */}
					<Button onClick={handleClose} color="primary">
						Sign In
          </Button>
					<Button onClick={handleClose} color="primary">
						Cancel
          </Button>

					{/* MAKE THIS BUTTON HANDLE CREATE ACCOUNT */}
				</DialogActions>

				<DialogActions>
					If you do not have an account,
					<Button 
					color="primary"
					onClick={handleClose}>
						Create one!
          </Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

