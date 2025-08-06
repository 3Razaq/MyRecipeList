const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipes.controller');
const upload = require('../config/multer');
const isSignedIn = require('../middleware/is-signed-in'); // imported as default function

// List all recipes
router.get('/', recipesController.index);

// Show form to add new recipe (protected)
router.get('/new', isSignedIn, recipesController.renderNew);

// Create recipe - expects file input name="imageFile"
router.post('/', isSignedIn, upload.single('imageFile'), recipesController.create);

// Show recipe details
router.get('/:id', recipesController.show);

// Show edit form (protected)
router.get('/:id/edit', isSignedIn, recipesController.renderEdit);

// Update recipe (protected)
router.put('/:id', isSignedIn, upload.single('imageFile'), recipesController.update);

// Delete recipe (protected)
router.delete('/:id', isSignedIn, recipesController.delete);

module.exports = router;
