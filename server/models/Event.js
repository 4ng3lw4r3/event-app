import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
            min: 2,
            max: 20,
        },
        username: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
            min: 2,
            max: 30,
            unique: false,
        },
        date: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
            min: 2,
            max: 500,
        },
        picturePath: String,
        userPicturePath: String,
        likes: {
            type: Map,
            of: Boolean,
          },
        comments: {
            type: Array,
            default: [],
        },
    },
        { timestamps: true }
)

const Event = mongoose.model("Event", eventSchema)
export default Event;