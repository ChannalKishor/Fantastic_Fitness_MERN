var mongoose = require("mongoose");

module.exports = mongoose.model("Recipe",{
    email: {
        type: String,
        required: true,
        unique: true,
      },
     recipeName: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      ingredients: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
    });
