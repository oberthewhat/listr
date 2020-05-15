const express = require("express");
var bodyParser =require("body-parser")
const usersRouter = require('./backend/router/users');
const restaurantRouter = require('./backend/router/restaurants')
const app = express()
const port = process.env.PORT || 8080;

// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '127.0.0.1';
// Listen on a specific port via the PORT environment variable
 
var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});

// app.use((req, res, next) => {
//   //authorization logic would go here
//   next()
// })

app.use(express.json())
app.use('/', usersRouter)
app.use('/listings', restaurantRouter )


// app.post()

// app.put()

// Use this method to give you feedback as to when the server 
app.listen(port, () => {
  console.log(`Server is listening on port${port}.`)
})