import dotenv from 'dotenv'
import jwt from "jsonwebtoken"
import userService from '../services/user.service.js'

dotenv.config()

export const authMiddleware = (req, res, next) => {
    try {
        const { authorization } = req.headers

        if (!authorization) {
            return res.send(401)
        }
    
        const parts = authorization.split(" ")
    
        if (parts.length !== 2) {
            return res.send(401)
        }
    
        const [schema, token] = parts
    
        if (schema !== "Bearer") {
            return res.send(401)
        }
    
        jwt.verify(token, process.env.SECRET_JWT, async (err, decoded) => {
            if (err) {
                return res.status(401).send({message: "Token invalid"})
            }
            
            const user = await userService.findOneService(decoded.id)

            if (!user || !user.id) {
                return res.status(401).send({message: "Token invalid"})
            }
        
            req.userId = user.id

            next()
        })


        

    } catch (err) {
        res.status(400).send({message: err.message})
    }
}