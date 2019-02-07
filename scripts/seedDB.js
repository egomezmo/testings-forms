const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/budget"
);

const budgetSeed = [
  {
    head:"BUDGET",
    income: 10000,
    expense: 8800,
    result: function()
    {return this.income-this.expense;},
    date: new Date(Date.now())
  },
  {
    head:"JAN",
    income: 10000,
    expense: 8800,
    result: function()
    {return this.income-this.expense;},
    date: new Date(Date.now())
  },
  {
    head:"FEB",
    income: 10000,
    expense: 8800,
    result: function()
    {return this.income-this.expense;},
    date: new Date(Date.now())
  },
  {
    head:"MAR",
    income: 10000,
    expense: 8800,
    result: function()
    {return this.income-this.expense;},
    date: new Date(Date.now())
  },
  {
    head:"APR",
    income: 10000,
    expense: 8800,
    result: function()
    {return this.income-this.expense;},
    date: new Date(Date.now())
  },
  {
    head:"MAY",
    income: 10000,
    expense: 8800,
    result: function()
    {return this.income-this.expense;},
    date: new Date(Date.now())
  },
  {
    head:"JUN",
    income: 10000,
    expense: 8800,
    result: function()
    {return this.income-this.expense;},
    date: new Date(Date.now())
  },
  {
    head:"JUL",
    income: 10000,
    expense: 8800,
    result: function()
    {return this.income-this.expense;},
    date: new Date(Date.now())
  },
  {
    head:"AGO",
    income: 10000,
    expense: 8800,
    result: function()
    {return this.income-this.expense;},
    date: new Date(Date.now())
  },
  {
    head:"SEP",
    income: 10000,
    expense: 8800,
    result: function()
    {return this.income-this.expense;},
    date: new Date(Date.now())
  },
  {
    head:"OCT",
    income: 10000,
    expense: 8800,
    result: function()
    {return this.income-this.expense;},
    date: new Date(Date.now())
  },
  {
    head:"NOV",
    income: 10000,
    expense: 8800,
    result: function()
    {return this.income-this.expense;},
    date: new Date(Date.now())
  },
  {
    head:"DIC",
    income: 10000,
    expense: 8800,
    result: function()
    {return this.income-this.expense;},
    date: new Date(Date.now())
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
