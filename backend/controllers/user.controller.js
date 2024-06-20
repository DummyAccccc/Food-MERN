import { User } from '../models/users.model.js'

export const getUsers = async (request, response) => {
    try {
        const users = await User.find({})
        if (!users) return response.status(400).send({ msg: "user not found" })
        response.status(200).json(users)
    } catch (error) {
        response.status(401).json({ msg: error.message })

    }
}
export const getUserById = async (request, response) => {
    try {
        const { id } = request.params
        const user = await User.findById(id)
        // const { type, email, password, address, city, country } = user
        if (!user) {
            response.status(404).json({ msg: 'User not found' })
        }
        // response.json(product)
        // response.send({ type, email, password, address, city, country })
        response.send(user)
    } catch (error) {
        response.status(401).json({ msg: error.message })

    }
}

export const putUser = async (request, response) => {
    try {
        // const localFilePath = request.file.path
        const { type, email, password, address, city, country } = request.body
        // const uploadResult = await uploadOnCloudinary(localFilePath)
        // if (!uploadResult) {
        //     return response.status(500).json({ msg: 'File upload to Cloudinary failed' });
        // }
        // fs.unlinkSync(localFilePath)
        const user = new User({
            type, email, password, address, city, country,
            // image: uploadResult.url //save cloudinary url
        })

        await user.save()

        return response.status(200).json(user)

    } catch (error) {
        return response.status(500).json({ msg: "hello there" })
    }
}

export const updateUser = async (request, response) => {
    try {
        // const fileLocalPath = request.file.path;
        // const result = await uploadOnCloudinary(fileLocalPath);
        // if (!result) {
        //     return response.status(500).json({ msg: 'File upload to Cloudinary failed' });
        // }
        // const imgurl = result.url;

        const { id } = request.params;
        const user = await User.findByIdAndUpdate(id, request.body, { new: true });
        if (!user) return response.status(404).send({ msg: "Product not found" });

        response.status(200).json(user);
    } catch (error) {
        response.status(500).json({ msg: error.message });
    }
};

export const deleteUser = async (request, response) => {
    try {
        const { id } = request.params
        const user = await User.findByIdAndDelete(id)
        if (!user) return response.status(400).send({ msg: "product not found" })

        response.status(200).send({ msg: "user deleted successfully" })
    } catch (error) {
        response.status(401).json({ msg: error.message })

    }
}