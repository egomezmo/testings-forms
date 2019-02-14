const db = require("../models");

// Defining methods for the BudgetsController
module.exports = {
  findAll: function (req, res) {
    db.Budget
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update: function (req, res) {
    console.log("aqui", req.body);

    let writeops = [];
    req.body.forEach(element => {
      writeops.push({
        updateOne: {
          filter: { _id: element._id },
          update: { $set: { month: element.month, income: element.income, expense: element.expense } }
        }

      })
    });
    console.log(writeops);
    db.Budget
      .bulkWrite(writeops)
      //.then(dbModel => res.json(dbModel))
      .then(result=>{
        console.log("AQUI",result)
        return res.status(200);
      })
      .catch(err => res.status(422).json(err));
  },



  findById: function (req, res) {
    db.Budget
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove: function (req, res) {
    db.Budget
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
