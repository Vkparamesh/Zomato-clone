import express from "express";
import passport from "passport";

import { ReviewModel } from '../../database/allModles'

const Router = express.Router()

Router.get('/:resId', async (req, res) => {
    try {

        const { resId } = req.params;
        const review = await ReviewModel.find({ restaurant: resId }).sort({ createdAt: -1 })
        if (!review) {
            return res.status(404).json({ error: "NO review found" })
        }
        return res.status(200).json({ review })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }

})


Router.post('/new', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        const { _id } = req.user;
        const { reviewData } = req.body;

        const Review = await ReviewModel.create({ ...reviewData, user: _id })
        return res.json({ Review })



    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

Router.delete('/delete/:_id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        const { user } = req;
        const { _id } = req.params;
        const review = await ReviewModel.findOneAndDelete({
            _id: _id,
            user: user._id,
        })
        if (!review) {
            return res.json({ message: "Review was not deleted" })
        }
        return res.json({ message: "Review success fully deleted" })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})


export default Router;