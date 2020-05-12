const express = require("express");
const usersRouter = require('./backend/router/users');
const restaurantRouter = require('./backend/router/restaurants')
const app = express()
const port = 8080;

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