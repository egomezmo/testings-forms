const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/budget"
);


const budgetSeed = [
  {
    month: "budget",
    income: "2000",
    expense: "800"
  },
  {
    month: "jan",
    income: "1200",
    expense: "900"
  },
  {
    month: "feb",
    income: "1100",
    expense: "800"
  }, {
    month: "mar",
    income: "1100",
    expense: "800"
  },
  {
    month: "apr",
    income: "1100",
    expense: "800"
  },
  {
    month: "may",
    income: "1100",
    expense: "800"
  },
  {
    month: "jun",
    income: "1100",
    expense: "800"
  },
  {
    month: "jul",
    income: "1100",
    expense: "800"
  },
  {
    month: "ago",
    income: "1100",
    expense: "800"
  },
  {
    month: "sep",
    income: "1100",
    expense: "800"
  },
  {
    month: "oct",
    income: "1100",
    expense: "800"
  },
  {
    month: "nov",
    income: "1100",
    expense: "800"
  },
  {
    month: "dec",
    income: "1100",
    expense: "200"
  }
];


db.Budget
  .remove({})
  .then(() => db.Budget.collection.insertMany(budgetSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
