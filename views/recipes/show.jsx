const React = require('react');
const Index = require('../partials/index');

function RecipesShow({ recipe }) {
  return (
    <Index title="Details of Recipes">
      <div className="show-page-container">
        <header className="show-header">
          <link rel="stylesheet" href="/stylesheets/show.css" />

          <h1>Details of Recipes</h1>
        </header>

        <div className="recipe-show-container">
          <h2 className="recipe-title">{recipe.title}</h2>
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            className="recipe-image"
          />
          <p className="recipe-category">
            <strong>Category:</strong> {recipe.category}
          </p>

          <section className="recipe-section">
            <h3>Ingredients:</h3>
            <p>{recipe.ingredients}</p>
          </section>

          <section className="recipe-section">
            <h3>Instructions:</h3>
            <p>{recipe.instructions}</p>
          </section>

          <div className="recipe-actions">
            <a href={`/recipes/${recipe._id}/edit`} className="btn btn-edit">
              ✏️ Edit
            </a>

            <form
              method="POST"
              action={`/recipes/${recipe._id}?_method=DELETE`}
              className="delete-form"
            >
              <button type="submit" className="btn btn-delete">
                🗑️ Delete
              </button>
            </form>
          </div>

          <a href="/recipes" className="btn btn-back">
            ← Back to Recipes
          </a>
        </div>
      </div>
    </Index>
  );
}

module.exports = RecipesShow;
