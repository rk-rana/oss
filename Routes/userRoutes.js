import express from 'express'
import controllers from '../Controllers/userController.js'

const Router = express.Router()

Router.get('/userSignUp', controllers.signUpPage) 

Router.post('/userSignUpPost', controllers.signUpPost)

Router.get('/userLogInPage', controllers.logInPage)

Router.post('/userLogInPost', controllers.logInPost)

Router.get('/user/listShops', controllers.listShops)



export default Router