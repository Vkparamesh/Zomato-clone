import express from "express";

import { FoodModel } from "../../database/allModles"
import { validateCategory, validateId } from "../../validation/commanvalidation";

const Router = express.Router();



Router.get('/:id', async (req, res) => {
    try {
        const { _id } = req.params;
        await validateId(req.params)
        const foods = await FoodModel.findById(_id);
        return res.json({ foods });

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})


Router.get('/r/:id', async (req, res) => {
    try {
        const { _id } = req.params;
        await validateId(req.params)
        const foods = await FoodModel.find({
            restaurant: _id,
        })
        if (!foods) {
            return res.status(404).json({ error: "food not found" })
        }
        return res.json({ foods })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})


Router.get("/c/:category", async (req, res) => {
    try {
        const { category } = req.params;
        await validateCategory(req.params)
        const foods = await FoodModel.find({
            category: { $regex: category, $options: i }
        })
        if (!foods) return res.status(404).json({ error: `No food Matche with ${category} ` })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})


export default Router;