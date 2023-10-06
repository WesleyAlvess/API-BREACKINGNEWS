import userService from '../services/user.service.js'

const create = async (req, res) => {
    try {
        const { name, username, email, password, avatar, background } = req.body


        if (!name || !username || !email || !password || !avatar || !background) {
            res.status(400).json({ message: "Submit all fields for registration" })
        }


        const user = await userService.createService(req.body)

        if (!user) {
            return res.status(400).send({ message: "Error creating User" })
        }

        res.status(201).send({
            message: "User created successfully",
            user: {
                id: user._id,
                name,
                username,
                email,
                avatar,
                background,
            }
        })

    } catch (err) {
        res.status(500).send({ message: err.message })
    }

}

const findAll = async (req, res) => {
    try {
        const users = await userService.findAllService()

        if (users.length === 0) {
            return res.status(400).send({ message: "There are no registered users" })
        }

        res.status(200).send(users)

    } catch (err) {
        res.status(500).send({ message: err.message })
    }

}

const findOne = async (req, res) => {
    try {
        const { id, user } = req

        res.status(200).send(user)

    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

const update = async (req, res) => {
    try {
        const { name, username, email, password, avatar, background } = req.body

    if (!name && !username && !email && !password && !avatar && !background) {
        res.status(400).json({ message: "Submit at least one field for update" })
    } else {
        res.status(200).send({ message: "User successfully updated" })
    }

    const { id, user } = req



    await userService.updateService(
        id,
        name,
        username,
        email,
        password,
        avatar,
        background,
    )

    } catch (err) {
        res.status(500).send({ message: err.message })
    }

}

export default { create, findAll, findOne, update }     