import mongoose from "mongoose";

const restaurantMenuSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
})

const restaurantSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        red: "User",
        required: true
    },
    restaurantName: {
        type: String,
        required: true
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },
    deliveryPrice: {
        type: String,
        required: true
    },
    estimatedDeliveryTime: {
        type: String,
        required: true
    },
    cuisines: [
        {
            type: String,
            required: true
        }
    ],
    imageUrl: {
        type: String,
        required: true
    },
    menuItems: [restaurantMenuSchema],
    

}, {
    timestamps: true
})

export const Restaurant = mongoose.model("Restaurant", restaurantSchema);
