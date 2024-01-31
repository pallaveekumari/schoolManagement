const {Router}  = require('express');
const { Signup, Login } = require('../Controller/User.Controller');
const AllRoutes=Router()
AllRoutes.post("/signup",Signup)
AllRoutes.post("/login",Login)

module.exports={
    AllRoutes
}