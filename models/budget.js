const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
  head:{type:String,required:true},
  expense: { type: Number, required: true },
  result: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;
