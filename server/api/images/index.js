import express from "express";
import AWS from "aws-sdk";
import multer from "multer";
import { ImageModel } from "../../database/restaurant";

import { s3Upload } from "../../utils/s3"


const Router = express.Router()


const storge = multer.memoryStorage();
const upload = multer({ storge })


Router.get("/_id", async (req, res) => {
    try {
        const image = await ImageModel.findById(req.params._id)

        return res.json({ image })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

Router.post("/", upload.single('file'), async (req, res) => {
    try {
        const file = req.file;
        const bucketOptions = {
            Bucket: "zomato-clone-vk",
            key: file.originalname,
            body: file.buffer,
            ContentType: file.mimetype,
            ACL: "public-read"
        }

        const uploadImage = await s3Upload(bucketOptions)

        const dbuplode = await ImageModel.create({
            images: [
                {
                    location: uploadImage.Location,
                }
            ]
        })
        return res.status(200).json({ dbuplode })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})


export default Router;