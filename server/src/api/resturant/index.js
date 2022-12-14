import express from "express";

const Router = express.Router();

import { RestaurantModel } from "../../database/restaurant";
import { validaeteSearchString, validaetRestaruntcity } from "../../validation/restaruntvalidation";



Router.get('/', async (req, res) => {
    try {
        const { city } = req.params;
        await validaetRestaruntcity(req.params)
        const restaurant = await RestaurantModel.find({ city })
        if (restaurant.length === 0) {
            return res.json({ error: "NO restaurent found in this city" })

        }
        return res.status(200).json({ restaurant })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})


Router.get("/:id", async (req, res) => {
    try {
        const { _id } = req.params;
        const restaurant = await RestaurantModel.findById(_id);
        if (!restaurant) {
            return res.status(400).json({ error: "restaurant not found" })
        }
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})


Router.get("/search/:searchString", async (req, res) => {
    try {
        const { searchString } = req.params;
        await validaeteSearchString(req.params)
        const restaurants = await RestaurantModel.find({
            name: {
                $regex: searchString, $options: "i"
            }
        })

        if (restaurants.length === 0) {
            return res.status(404).json({ error: `no restauren found ${searchString}` })
        }
        return res.status(200).json({ restaurants })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

Router.post('/new', async (req, res) => {
    try {
        const { restaurant } = req.body;

        const newrestarunt = await RestaurantModel.create({ restaurant })
        return res.json({ message: "Review success fully deleted", newrestarunt })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})




export default Router;


