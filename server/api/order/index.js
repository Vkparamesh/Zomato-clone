import express from "express";
import passport from "passport"
import { OrderModel } from "../../database/allModles"

const Router = express.Router();


Router.get('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        const { user } = req;
        const getOrders = await OrderModel.findOne({ user: user._id })
        if (!getOrders) {
            return res.status(400).json({ error: "user not found" })
        }
        return res.status(200).json({ error: "user not found" })


    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

Router.put('/new', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        const { user } = req;

        const { orderDetails } = req.body;
        const addNewOrder = await OrderModel.findOneAndUpdate({
            user: user._id
        }, {

            $push: {
                orderDetails: orderDetails
            }
        }, {
            new: true
        })
        return res.json({ order: addNewOrder })


    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})




export default Router;