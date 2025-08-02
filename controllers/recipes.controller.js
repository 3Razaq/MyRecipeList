const Recipe = require('../models/recipe');

exports.index = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.render('recipes/index', { recipes });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.renderNew = (req, res) => {
  res.render('recipes/new');
};

exports.create = async (req, res) => {
  try {
    // If you use multer for file upload, access file with req.file
    // but check if req.file exists first!
    let imagePath = '';
    if (req.file) {
      imagePath = req.file.path; // or your cloudinary url or wherever
    }

    const recipeData = {
      title: req.body.title,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
      image: imagePath,
    };

    await Recipe.create(recipeData);
    res.redirect('/recipes');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.show = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).send('Recipe not found');
    res.render('recipes/show', { recipe });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.renderEdit = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).send('Recipe not found');
    res.render('recipes/edit', { recipe });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.update = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).send('Recipe not found');

    recipe.title = req.body.title;
    recipe.ingredients = req.body.ingredients;
    recipe.instructions = req.body.instructions;

    if (req.file) {
      recipe.image = req.file.path; // Update image if new one uploaded
    }

    await recipe.save();
    res.redirect(`/recipes/${recipe._id}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);
    res.redirect('/recipes');
  } catch (error) {
    res.status(500).send(error.message);
  }
};
