import express from 'express'
import path from 'path'
import hbs from 'hbs'
import bodyparser from 'body-parser'
import dotenv from 'dotenv'

import router from './Routes/userRoutes.js'
import shopkeeperRouter from './Routes/shopkeeperRoutes.js'

import './config/coonect.js'
const app = express()

dotenv.config({ path: "./config/config.env" });


app.use(express.json())
app.use(bodyparser.urlencoded({extended: true}))
app.set('views',  'Views')
app.set('view engine', 'hbs')
app.use(express.static('./Views'))
app.use(router)
app.use(shopkeeperRouter)

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})

