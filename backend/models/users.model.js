import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    type: {
        type: String,
        enum: ["Customer", "Owner"],
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },

}, {
    timestamps: true
})

export const User = mongoose.model("User", userSchema);
