const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const recipesController = require('../controllers/recipes.controller');

// List all recipes
router.get('/', recipesController.index);

// Show new recipe form
router.get('/new', recipesController.renderNew);

// Create new recipe
router.post('/', upload.single('image'), recipesController.create);

// Show single recipe
router.get('/:id', recipesController.show);

// Show edit form
router.get('/:id/edit', recipesController.renderEdit);

// Update recipe
router.put('/:id', upload.single('image'), recipesController.update);

// Delete recipe
router.delete('/:id', recipesController.delete);

module.exports = router;