const express = require('express')
const router = express.Router()
const multer = require('multer')
const User = require("../models/users")

//Image upload
const storage = multer.diskStorage({
    destination: function(req,res,cb){
        cb(null,"./uploads")
    },
    filename: function(req,file,cb){
        cb(null,file.fieldname + "_" + Date.now() + "_" + file.originalname)
    }
})

const upload = multer({
    storage:storage,
}).single("image")

router.get('/', (req, res) => {
    return res.render("index", { title: "Home Page" })
})

router.get("/add", (req, res) => {
    res.render("add_users", { title: "Add Users" })
})

router.get('/users', (req, res) => {
    return res.status(200).json({
        message: "All Users"
    })
})

module.exports = router