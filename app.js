require("dotenv").config();
const express = require("express")
const app = express()
const userRoutes = require("./routes/user")
const connectToDB = require("./config/db")

// middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

connectToDB()

// routes
app.use("/api",userRoutes)

module.exports = app;