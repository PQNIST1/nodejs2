const Class = require("../model/model");

const classController = {
    //ADD CLASS
    addClass: async(req,res)=> {
        try{
           const newClass = new Class(req.body);
           const savedClass = await newClass.save();
           res.status(200).json(savedClass);
        }catch(err){
            res.status(500).json(err);
        }
    },

    //GET ALL CLASS
    getAllClass: async(req,res)=> {
        try{
            const classs = await Class.find();
            res.status(200).json(classs);
        }catch(err){
            res.status(500).json(err);
        }
    },

    //GET AN CLASS
    getAnClass: async(req,res)=>{
        try{
            const classs = await Class.findById(req.params.id)
            res.status(200).json(classs);
        }catch(err){
            res.status(500).json(err);
        }
    },
    //UPDATE CLASS
    updateClass: async(req,res)=>{
        try {
          const classs = await Class.findById(req.params.id);
          await classs.updateOne({$set: req.body});  
          res.status(200).json("Update successfully!");
        } catch (error) {
            res.status(500).json(err);
        }
    },
    //DELETE CLASS
    deleteClass: async(req,res)=>{
        try {
            await Class.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted successfully!");
        } catch (error) {
           res.status(500).json(err); 
        }
    }
};
module.exports = classController;