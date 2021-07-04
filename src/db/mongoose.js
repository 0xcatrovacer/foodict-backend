const mongoose = require('mongoose')

const connectionURL = process.env.FOODICT_MONGO_URL

mongoose.connect(connectionURL, {
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
})