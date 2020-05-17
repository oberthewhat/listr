const express = require("express");
const usersRouter = require('./backend/router/users');
const restaurantRouter = require('./backend/router/restaurants')
const authRouter = require("./backend/router/auth");
const app = express()
const port = process.env.PORT || 8080;
var host = process.env.HOST || '127.0.0.1';
const cors = require("cors")

// var cors_proxy = require('cors-anywhere');
// cors_proxy.createServer({
//     originWhitelist: [], // Allow all origins
//     requireHeader: ['origin', 'x-requested-with'],
//     removeHeaders: ['cookie', 'cookie2']
// }).listen(port, host, function() {
//     console.log('Running CORS Anywhere on ' + host + ':' + port);
// });
app.use(cors())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

app.use(express.json())
app.use('/', usersRouter)
app.use('/listings', restaurantRouter )
app.use('/login', authRouter)

// app.post()

// app.put()

// Use this method to give you feedback as to when the server 
app.listen(port, () => {
  console.log(`Server is listening on port${port}.`)
})