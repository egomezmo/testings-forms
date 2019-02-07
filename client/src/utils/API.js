import axios from "axios";

export default {
  // Gets all budget

  
  getBudget: function() {
    return axios.get("/api/budgets");
  },

  
  // Gets the budget with the given id
  getBudgets: function(id) {
    return axios.get("/api/budgets/" + id);
  },
  // Deletes the book with the given id
  deleteBudget: function(id) {
    return axios.delete("/api/budgets/" + id);
  },
  // Saves a book to the database
  saveBudget: function(bookData) {
    return axios.post("/api/budgets", bookData);
  }
};
