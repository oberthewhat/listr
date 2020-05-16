import React from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormDialog from '../containers/createuser';

export default function LogIn() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button variant="outlined" color="inherit" onClick={handleClickOpen}>
				Sign Out
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
						id="name"
						label="Username"
						type="email"
						fullWidth
					/>
					<TextField
						id="password"
						label="Password"
						type="password"
						autoComplete="current-password"
						fullWidth
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
           <FormDialog />
				</DialogActions>
			</Dialog>
		</div>
	);
}

