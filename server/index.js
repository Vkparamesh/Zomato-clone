import express from "express";
import dotenv from "dotenv"
import Auth from "./api/auth"
import food from "./api/food"
import restaurant from "./api/resturant";
import user from "./api/user"

const session = require("express-session")
import passport from 'passport';

import privateRouteConfig from "./config/route.config"



import ConnectDB from "./database/Connection"
dotenv.config()
privateRouteConfig(passport)

const zomato = express();

zomato.use(express.json())
zomato.use(session({
    secret: "Vkparamesh", resave: true,
    saveUninitialized: true
}))
zomato.use(passport.initialize())
zomato.use(passport.session());

zomato.get("/", (req, res) => {
    res.json({
        message: "server is running"
    })
})
zomato.use("/auth", Auth);
zomato.use('/food', food)
zomato.use('/restaurant', restaurant)
zomato.use('/user', passport.authenticate('jwt', { session: false }), user)

zomato.listen(4000, () => {
    ConnectDB().then(() => {
        console.log("Server is running");
    })
        .catch((error) => {
            console.log("Server is running, but database connection failed")
            console.log(error)
        })

})