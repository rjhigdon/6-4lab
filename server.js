const express = require('express')
const app = express()

app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) => {res.sendFile(path.join(__dirname, '/public/index.html')) })

app.get('/api/loan', (req, res) => {
    res.status(200).send("Congrats on your new loan")
})

app.listen(4000, () => console.log("server is running on port 4000"))