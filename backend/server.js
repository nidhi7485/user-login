require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')

const port = process.env.PORT || 5000

// db
const connectDB = require('./db/connect')

// middleware
app.use(cookieParser())

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
app.use(express.json())
// router
const userRouter = require('./routes/userRoutes')
app.use('/', userRouter)

const start = () => {
  connectDB(process.env.MONGO_URI)
  app.listen(port, console.log(`server is running on port ${port}`))
}

start()
