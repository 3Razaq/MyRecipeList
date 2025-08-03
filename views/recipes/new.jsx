const React = require('react');
const Index = require('../partials/index');

function NewRecipe() {
  return (
    <Index title="Add New Recipe">
      <link rel="stylesheet" href="/stylesheets/edit.css" />

      <h1>Add a New Recipe</h1>
      <form action="/recipes" method="POST" encType="multipart/form-data">
        <label>Title:</label>
        <input name="title" required placeholder="Recipe title" />

        <label>Ingredients:</label>
        <textarea name="ingredients" placeholder="Enter ingredients" rows={4} />

        <label>Instructions:</label>
        <textarea name="instructions" placeholder="Enter instructions" rows={5} />

        <label>Description:</label>
        <textarea name="description" placeholder="Enter description" rows={6} />

        <label>Category:</label>
        <input name="category" placeholder="e.g. Breakfast, Dessert" />

        <label>Recipe Image (Upload file):</label>
        <input name="imageFile" type="file" accept="image/*" />

        <label>Or Image URL:</label>
        <input
          name="imageUrl"
          type="url"
          placeholder="Paste image URL here"
          style={{ width: '100%', marginBottom: '1rem' }}
        />

        <button type="submit">Add Recipe</button>
      </form>

      <a href="/recipes" className="btn btn-back">← Back to Home</a>
    </Index>
  );
}

module.exports = NewRecipe;
