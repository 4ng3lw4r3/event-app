import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        user: {
            type: String,
            required: true,
            min: 2,
            max: 50,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            min: 2,
            max: 50,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        events: {
            type: Array,
            default: [],
        },
        places: {
            type: Array,
            default: [],
        },
        picturePath: {
            type: String,
            default: "",
        },
        postedEvents: {
            type: Number
        },
    },
        { timestamps: true }
)

const User = mongoose.model("User", UserSchema)
export default User;