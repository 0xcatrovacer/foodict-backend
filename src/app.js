const express = require('express')

require('./db/mongoose')

const app = express()

app.use(express.json())

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Backend is running on port ${port}`)
})