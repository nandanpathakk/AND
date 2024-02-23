const express = require("express")
const adminprojectRouter = express.Router()
const { adminprojectModel } = require("../models/adminprojectModel");
const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req,file,cb){
        return cb(null, "./adminProjectUploads")
    },
    filename: function (req,file,cb){
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage })

//for reading data
adminprojectRouter.get("/adminproject",async(req, res) => {
    const data = await adminprojectModel.find({})
    res.json({success: true, data: data})
});

//create or post data
adminprojectRouter.post("/adminprojectcreate",upload.single("issueImage"),async(req,res)=>{
    console.log(req.body)
    console.log(req.file)
    const data = new adminprojectModel({
        projectImage: {
            data: req.file.filename,
            contenType: "image"
        },
        project: req.body.project,
        projectDesc: req.body.projectDesc
    })
    await data.save()
    res.send({
        success: true, message: "data saved successfully"
    })
})

module.exports = {
    adminprojectRouter,
}