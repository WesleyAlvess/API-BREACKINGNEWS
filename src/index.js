import express from 'express'
import bodyParser from 'body-parser'
import connectDatabase from './database/db.js'
import dotenv from 'dotenv'

import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'
import newsRoute from './routes/news.route.js'

dotenv.config()

const port = process.env.PORT || 3000
const app = express()

connectDatabase()
app.use(bodyParser.json())
app.use("/user", userRoute)
app.use("/auth", authRoute)
app.use("/news", newsRoute)

app.listen(port, () => console.log(`Server running on port: ${port}`))