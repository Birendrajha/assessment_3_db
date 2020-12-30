const mongoose=require('mongoose')


mongoose.connect("mongodb://localhost:27017/assessment__3__db",
{useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})
.then(() => {
    console.log('Connected to Mongo!')
})
.catch((err) => {
    console.error('Error connecting to Mongo', err)
})
