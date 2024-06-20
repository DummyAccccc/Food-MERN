import { Restaurant } from "../models/restaurants.model.js";

export const getRestaurant = async (req, res) => {
    try {
        const allRestaurants = await Restaurant.find({});
        if (!allRestaurants) return res.status(400).send("Restaurant Not found...");

        return res.status(200).json(allRestaurants)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
};

export const getOneRestaurant = async (req, res) => {
    try {
        const { id } = req.params;
        const restaurant = await Restaurant.findById(id);
        if (!restaurant) return res.status(400).send("Restaurant Not found...");

        return res.status(200).json(restaurant)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
};

export const createRestaurant = async (req, res) => {
    try {
        const { body } = req;
        const newRestaurant = await Restaurant.create(body);
        if (!newRestaurant) return res.status(400).send("Restaurant Not added...");

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }

};

export const updateRestaurant = async (req, res) => {
    try {

        const { id } = req.params;
        const restaurant = await Restaurant.findByIdAndUpdate(id, req.body);

        if (!restaurant) return res.status(404).send({ msg: "Restaurant not found..." })

        const updatedRestaurant = await Restaurant.findById(id);
        return res.status(200).json(updatedRestaurant)

    } catch (error) {
        res.status(500).json({ msg: error.message })

    }
};

export const deleteRestaurant = async (req, res) => {
    try {

        const { id } = req.params;
        const restaurant = await Restaurant.findByIdAndDelete(id);

        if (!restaurant) return res.status(404).send({ msg: "Restaurant not found..." })

        return res.status(200).json({ msg: "Restaurant deleted Successfully..." })

    } catch (error) {
        res.status(500).json({ msg: error.message })

    }
};