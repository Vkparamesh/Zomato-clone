import express from "express";
import dotenv from "dotenv"
import Auth from "./api/auth"

import ConnectDB from "./database/Connection"
dotenv.config()

const zomato = express();

zomato.use(express.json())

zomato.get("/", (req, res) => {
    res.json({
        message: "server is running"
    })
})
zomato.use("/auth", Auth);

zomato.listen(4000, () => {
    ConnectDB().then(() => {
        console.log("Server is running");
    })
        .catch((error) => {
            console.log("Server is running, but database connection failed")
            console.log(error)
        })

})