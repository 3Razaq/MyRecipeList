const React = require('react');
const Index = require('../partials/index');

function RecipesShow({ recipe }) {
  const imageUrl = recipe.image
    ? recipe.image.startsWith('http')
      ? recipe.image
      : `/${recipe.image}`
    : '';

  return (
    <Index title="Details of Recipes">
      <link rel="stylesheet" href="/stylesheets/show.css" />
      <div className="recipe-container">
        <h1 className="recipe-heading">Details of Recipes</h1>

        <h2 className="recipe-title">{recipe.title}</h2>

        {imageUrl && (
          <img src={imageUrl} alt={recipe.title} className="recipe-image" />
        )}

        <p className="recipe-category"><strong>Category:</strong> {recipe.category}</p>

        <div className="recipe-section">
          <h3>Ingredients:</h3>
          <p>{recipe.ingredients}</p>
        </div>

        <div className="recipe-section">
          <h3>Instructions:</h3>
          <p>{recipe.instructions}</p>
        </div>

        <div className="recipe-buttons">
          <a href={`/recipes/${recipe._id}/edit`} className="btn btn-edit">
            ✏️ Edit
          </a>

          <form
            method="POST"
            action={`/recipes/${recipe._id}?_method=DELETE`}
            className="delete-form"
          >
            <button type="submit" className="btn btn-delete">🗑️ Delete</button>
          </form>
        </div>

        <a href="/recipes" className="btn btn-back">← Back to Recipes</a>
      </div>
    </Index>
  );
}

module.exports = RecipesShow;
