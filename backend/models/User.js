import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
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
        friends: {
            type: Array,
            default: [],
          },
        location: String,
        postedEvents: {
            type: Number
        },
    },
        { timestamps: true }
)

const User = mongoose.model("User", userSchema);
export default User;