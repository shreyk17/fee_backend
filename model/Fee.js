const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const feeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  feeImage: {
    type: String,
    required: true,
  },
  pdfLink: {
    type: String,
  },
});

module.exports = mongoose.model("Fee", feeSchema);
