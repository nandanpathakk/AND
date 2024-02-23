const express = require('express')
const cors= require("cors")
const multer = require("multer")
const { connection } = require("./db")
require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}));

const PORT = process.env.PORT || 3000

//user posts issue
const { roadIssueRouter } = require("./routes/roadIssue_routes")
app.use(roadIssueRouter)
const { cleanIssueRouter } = require("./routes/cleanIssue_routes")
app.use(cleanIssueRouter)
const { fssaiIssueRouter } = require("./routes/fssaiIssue_routes")
app.use(fssaiIssueRouter)

app.get('/', (req, res) => {
    res.send({
        message: "api is working now"
    })
})

console.log("Connected to DB")
    app.listen(PORT,async()=>{
        console.log("Server running")
        console.log(`Example app listening on port http://localhost:${PORT}`)
    })