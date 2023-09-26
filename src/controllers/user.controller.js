const create = (req, res) => {
    const {name, username, email, password, avatar, background } = req.body
    

    if(!name || !email) {
        res.status(400).json({error: "Preencha todos os campos!!!"})
    } else {
        res.status(201).send({
            message: "User created successfully",
            user: {
                name,
                username,
                email,
                avatar,
                background,
            }
        })
    }

}

module.exports = { create } 