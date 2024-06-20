import { Order } from '../models/orders.model.js'


export const getOrders = async (request, response) => {
    try {
        const orders = await Order.find({}).populate('user').populate('restaurant')
        response.status(200).json(orders)
    } catch (error) {
        response.status(401).json({ msg: error.message })

    }
}

export const getOrderById = async (request, response) => {
    const { id } = req.params;
    try {
        const order = await Order.findById(id).populate('user').populate('restaurant');
        if (!order) return res.status(404).json({ message: "Order not found" });
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const putorder = async (request, response) => {
    try {
        // const localFilePath = request.file.path
        const { user, restaurant, amount, menuItems, status, payment } = req.body;
        // const uploadResult = await uploadOnCloudinary(localFilePath)
        // if (!uploadResult) {
        //     return response.status(500).json({ msg: 'File upload to Cloudinary failed' });
        // }
        // fs.unlinkSync(localFilePath)
        const newOrder = new Order({
            user,
            restaurant,
            amount,
            menuItems,
            status,
            payment
        });


        const savedOrder = await newOrder.save();

        response.status(200).json(savedOrder)

    } catch (error) {
        response.status(500).json({ msg: "hello there" })
    }
}


export const updateOrder = async (request, response) => {
    try {
        // const fileLocalPath = request.file.path;
        // const result = await uploadOnCloudinary(fileLocalPath);
        // if (!result) {
        //     return response.status(500).json({ msg: 'File upload to Cloudinary failed' });
        // }
        // const imgurl = result.url;

        const { id } = request.params;
        const order = await Order.findByIdAndUpdate(id,request.body, { new: true });
        if (!order) return response.status(404).send({ msg: "order not found" });

        response.status(200).json(order);
    } catch (error) {
        response.status(500).json({ msg: error.message });
    }
};

export const deleteOrder= async (request, response) => {
    try {
        const { id } = request.params
        const order = await Order.findByIdAndDelete(id)
        if (!order) return response.status(400).send({ msg: "product not found" })

        response.status(200).send({ msg: "order deleted successfully" })
    } catch (error) {
        response.status(401).json({ msg: error.message })

    }
}

