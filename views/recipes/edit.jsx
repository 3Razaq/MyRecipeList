const React = require('react');
const Index = require('../partials/index');

function EditRecipe({ recipe }) {
  return (
    <Index title={`Edit ${recipe.title}`}>
      <link rel="stylesheet" href="/stylesheets/edit.css" />

      <h2>Edit Recipe</h2>
      <form
        action={`/recipes/${recipe._id}?_method=PUT`}
        method="POST"
        encType="multipart/form-data"
      >
        <label>Title:</label>
        <input
          name="title"
          defaultValue={recipe.title}
          required
          placeholder="Recipe title"
        />
        
        <label>Ingredients:</label>
        <textarea
          name="ingredients"
          defaultValue={recipe.ingredients}
          placeholder="Enter ingredients"
          rows={4}
        />

        <label>Instructions:</label>
        <textarea
          name="instructions"
          defaultValue={recipe.instructions}
          placeholder="Enter instructions"
          rows={5}
        />

        <label>Description:</label>
        <textarea
          name="description"
          defaultValue={recipe.description}
          placeholder="Enter description"
          rows={6}
        />

        <label>Category:</label>
        <input
          name="category"
          defaultValue={recipe.category}
          placeholder="e.g. Breakfast, Dessert"
        />

        <label>Replace Image (Upload file):</label>
        <input name="imageFile" type="file" accept="image/*" />

        <label>Or Image URL:</label>
        <input
          name="imageUrl"
          type="url"
          placeholder="Paste image URL here"
          defaultValue={
            recipe.image && !recipe.image.startsWith('uploads/')
              ? recipe.image
              : ''
          }
          style={{ width: '100%', marginBottom: '1rem' }}
        />

        {recipe.image && (
          <div className="current-image">
            <p>Current Image:</p>
            <img
              src={recipe.image.startsWith('http') ? recipe.image : `/${recipe.image}`}
              alt={recipe.title}
              style={{ maxWidth: '300px' }}
            />
          </div>
        )}

        <button type="submit">Update Recipe</button>
      </form>

      <a href="/recipes" className="btn btn-back">← Back to Recipes</a>
    </Index>
  );
}

module.exports = EditRecipe;
