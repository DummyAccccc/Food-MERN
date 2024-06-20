import mongoose from "mongoose";


const orderMenuSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})
const paymentSchema = mongoose.Schema({
    paymentID: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String
    }
})

const orderSchema = new mongoose.Schema({


    user: {
        type: mongoose.Schema.Types.ObjectId,
        red: "User",
        required: true
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        red: "Restaurant",
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    menuItems: [orderMenuSchema],
    status: {
        type: String,
        required: "true",
        default: "Pending"
    },
    payment: [paymentSchema],


}, {
    timestamps: true
})

export const Order = mongoose.model("Order", orderSchema);
