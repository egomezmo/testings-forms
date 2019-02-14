import axios from "axios";
//import { request } from "http";

export default {

  getBudget: function () {                  // Gets all budget
    return axios.get("/api/budgets");
  },

  updateBudget: function (res) {                 // update all cnages
    console.log(res)
    return axios.put("/api/budgets",res);
    // axios.put(url[, data[, config]])
  }

};
