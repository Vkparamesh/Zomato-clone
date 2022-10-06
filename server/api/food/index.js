import express, { Router } from "express";

import { FoodModel } from "../../database/allModles"

const Router = express.Router();



Router.get('/:id', async (req, res) => {
    try {
        const { _id } = req.params;
        const foods = FoodModel.findById(_id);
        return res.json({ foods });

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})


Router.get('/r/:id', async (req, res) => {
    try {
        const { _id } = req.params;
        const foods = await FoodModel.find({
            restaurant: _id,
        })
        return res.json({ foods })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})


Router.get("/c/:category", async (req, res) => {
    try {
        const { _id } = req.params;
        const foods = await FoodModel.find({
            category: { $regex: category, $options: i }
        })
        if (!foods) return res.status(404).json({ error: `No food Matche with ${category} ` })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})


export default Router;