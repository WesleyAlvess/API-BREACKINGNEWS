import { createService, findAllService } from "../services/news.service.js"

const create = async (req, res) => {
    try {
        const {title, text, banner} = req.body

        if (!title || !text || !banner) {
            res.status(400).send({message: "Submit all fields for registration"})
        }

        await createService({
            title,
            text,
            banner,
            id: "objectIdFake",
        })

        res.status(201)

    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

const findAll = async (req, res) => {
    try {
        // const news = []
        res.status(200).send("pegar todas as noticias")
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

export {
    create,
    findAll,
}