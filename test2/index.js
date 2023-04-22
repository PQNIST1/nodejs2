const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const classRoute = require("./routes/class")


dotenv.config();

app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));


mongoose.connect("mongodb://localhost:27017/Class")

app.use("/v1/class", classRoute);



app.listen(8000, ()=> {
    console.log("Server is running....");
});

