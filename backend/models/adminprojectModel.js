const mongoose = require("mongoose")

const adminprojectSchema = mongoose.Schema({
    project: {type: String},
    projectDesc: {type: String},
})


const adminprojectModel = mongoose.model("AdminProject",adminprojectSchema);

module.exports = {
    adminprojectModel,
}