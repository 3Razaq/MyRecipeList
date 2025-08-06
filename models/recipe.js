const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: String,
  instructions: String,
  description: String,
  image: String,
  category: String,
  createdAt: { type: Date, default: Date.now },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;