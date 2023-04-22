const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    id:{
        type: mongoose.Schema.Types.ObjectId
    },
    classId: {
        type: String,
        required: true
    },
    name:{
        type:String,
    },
    quantity:{
        type: Number,
    },
    teacherId: {
        type: String,
    },
})

let Class = mongoose.model("Class",classSchema);

module.exports = Class;