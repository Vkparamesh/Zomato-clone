import express from "express";

import { MenuModel, ImageModel  } from "../../database/allModles"


const Router = express.Router()


Router.get('/list/:_id',async (req,res)=>{
    try {
        const { _id }= req.params;
        console.log(_id);
        const menus = await MenuModel.findById(_id);
        console.log(menus);
        if(!menus){
           return res.status(404).json({error:"No menu present for this restaurant"})
        }
        return res.json({menus})
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})


Router.get("/image/:_id",async(req,res)=>{
    try {
        const {_id} = req.params;
        const menuImages =await ImageModel.findById(_id);
        console.log(menuImages)
        if(!menuImages){
            return res.status(404).json({error:"no images found"})
        }
        return res.status(200).json({menuImages});
        

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})





export default Router;