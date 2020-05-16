const { auth } = require('express-openid-connect');

const config = {
  required: false,
  auth0Logout: true,
  appSession: {
    secret: 'a long, randomly-generated string stored in env'
  },
  baseURL: 'http://localhost:3000',
  clientID: 'TI8pVeIgYouD4qS5ys5KPo7FiZ3GcJhL',
  issuerBaseURL: 'https://dev-1w2f-0mg.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.isAuthenticated() ? 'Logged in' : 'Logged out');
});