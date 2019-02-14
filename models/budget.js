const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const budgetSchema = new Schema({

  month: { type: String, required: true },
  income: { type: Number, required: true },
  expense: { type: Number, required: true }

});

const Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;