import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/oneStoreShop', { useNewUrlParser: true , useUnifiedTopology: true })
.then(function(){
    console.log("Database connected")
})