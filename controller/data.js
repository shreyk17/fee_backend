const Fee = require("../model/Fee");

exports.getData = (req, res) => {
  const fee = Fee.find()
    // .populate("title", "_id")
    .select("_id title category price img feeImage pdfLink")
    //.sort({ price: -1 })
    .then((fee) => {
      return res.status(200).json(fee);
    })
    .catch((err) => console.log(err));
};
