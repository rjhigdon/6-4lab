const express = require('express')
const app = express()
const path = require('path')
app.use(express.static(`${__dirname}/public`))

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '9fef3d166216492c86b774f64cc0a2cf',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('hello')

try {
    nonExistentFunction();
  } catch (error) {
    console.error(error);

app.get('/', (req, res) => {res.sendFile(path.join(__dirname, '/public/index.HTML')) })

app.get('/api/loan', (req, res) => {
    res.status(200).send("Congrats on your new loan")
})

app.listen(4000, () => console.log("server is running on port 4000"))