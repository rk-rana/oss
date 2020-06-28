
import User from '../Models/User.js'

import Shops from '../Models/Shop.js'


const controllers = {

    signUpPage : (req, res) => {
        res.render('signUp', {data : "heyy"})
       
    },

    signUpPost : (req, res) => {
         User.create(req.body)
         .then((user, err) => {
             if (err) {
                 res.json({
                     status : 400,
                     message : "Mongodb Cannot create new user",
                     error : err
                 })
             }
             res.json({
                 status : 200,
                 message : "Registration Successful",
                 user : user
             })
         }
         )

    
    },

    logInPage : (req, res) => {
        res.render('logIn')
    },

    logInPost : async (req, res) => {
      const user=  await  User.findOne({where:{userName : req.body.userName}})
           if (user.password == req.body.password) {

            res.json({
                status : 200,
                message : "Login successful"
            })

           
        }
       
    },

    listShops : async (req, res) => {

        const allShops = await Shops.find()
        res.render('allShops', {allShops : allShops})


        // User.find({_id: req.params._id})
        // .then((user) => {
        //     const userX = user.locationFromVerticalRoad
        //     const userY = user.locationFromHorizontalRoad
        // })

        // Shops.find()
        // .then((shop) => {
        //     const shopkeeperX = shop.locationFromVerticalRoad
        //     const shopkeeperY = shop.locationFromHorizontalRoad
        //     res.send(shops)
        // })

    }
}
    




export default controllers








