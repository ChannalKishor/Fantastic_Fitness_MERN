const userController = require('./controllers/userController');


module.exports = function (app) {

  app.post("/Recipe/create", userController.register);  
  app.get("/Recipe/getAll", userController.getAllUsers);
  app.put("/Recipe/edit/:email", userController.updateUsers);
  app.delete("/Recipe/delete", userController.deleteUser);
};

