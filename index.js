var Express = require("express");
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");
const feeRoute = require("./routes/fee");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();

var app = Express();

app.use(cors());

//db
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("dB connected successfully");
});

mongoose.connection.on("error", (err) => {
  console.log(`dB connection error ${err.message}`);
});

//middlewares
app.use(morgan("dev"));

app.use("/", feeRoute);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
