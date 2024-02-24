const express = require("express")
const adminprojectRouter = express.Router()
const { adminprojectModel } = require("../models/adminprojectModel");


//for reading data
adminprojectRouter.get("/adminproject",async(req, res) => {
    const data = await adminprojectModel.find({})
    res.json({success: true, data: data})
});

//create or post data
adminprojectRouter.post("/adminprojectcreate",async(req,res)=>{
    console.log(req.body)
    const data = new adminprojectModel({
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