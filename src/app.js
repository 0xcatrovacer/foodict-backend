const express = require('express')

const userRouter = require('./routers/user-routers')

require('./db/mongoose')

const app = express()

app.use(express.json())


app.use(userRouter)

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Backend is running on port ${port}`)
})