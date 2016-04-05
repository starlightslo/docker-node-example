'use strict'

const express = require('express')
const PORT = 8081

const app = express()
app.get('/', (req, res, next) => {
	res.send('Hello world.')
})

app.listen(PORT)
console.log('Running on http://localhost:' + PORT)
