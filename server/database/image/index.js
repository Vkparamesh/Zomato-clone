import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
    {
        images: [
            {
                location: { type: string, required: true }
            }
        ]



    },
    {
        timestamps: true
    })

export const ImageModel = mongoose.model("Images", ImageSchema)