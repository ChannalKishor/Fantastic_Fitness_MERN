const userController = require('./controllers/userController');


module.exports = function (app) {

  app.post("/user/create", userController.register);
  // app.post("/user/login",userController.login);
  app.get("/user/getAll", userController.getAllUsers);
  app.put("/user/edit/:email", userController.updateUsers);
  app.delete("/user/delete", userController.deleteUser);
};

