const express = require("express");
const commentRouter = express.Router()
const { commentModel } = require("../models/commentsModel");

//for reading data
commentRouter.get("/comment",async(req, res) => {
    const data = await commentModel.find({})
    res.json({success: true, data: data})
});

//create or post data
commentRouter.post("/commentcreate",async(req,res)=>{
    console.log(req.body)
    const data = new commentModel({
        comment: req.body.comment
    })
    await data.save()
    res.send({
        success: true, message: "data saved successfully"
    })
})

module.exports = {
    commentRouter,
}