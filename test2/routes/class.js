const bodyParser = require("body-parser");
const classController = require("../controllers/classController");
const router = require("express").Router();

//ADD CLASS
router.post("/",classController.addClass);

//GET ALL CLASS
router.get("/",classController.getAllClass);

//GET AN CLASS
router.get("/:id",classController.getAnClass);

//UPDATE CLASS
router.put("/:id",classController.updateClass);

//DELETE A ClASS
router.delete("/:id",classController.deleteClass);

module.exports = router;