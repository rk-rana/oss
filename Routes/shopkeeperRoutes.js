import express from 'express'
import controllers from '../Controllers/shopkeeperController.js'

const Router = express.Router()


Router.get('shopkeeper/signUp',controllers.signUpPage) 

Router.post('/shopkeeper/SignUpPost', controllers.signUpPost)

Router.get('/shopkeeperLogInPage', controllers.logInPage)

Router.post('/shopkeeperLogInPost', controllers.logInPost)

Router.post('/shopkeeper/addShop', controllers.addShop)

Router.post('/shopkeeper/shop/addProducts', controllers.addProducts)

export default Router