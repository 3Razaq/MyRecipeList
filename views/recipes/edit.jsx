const React = require('react');

function EditRecipe({ recipe }) {
  return (
    <html>
      <head>
        <title>Edit {recipe.title}</title>
        <link rel="stylesheet" href="/edit.css" /> {/* Link to new CSS */}
      </head>
      <body>
        <nav>
          <a href="/recipes">← Back to Recipes</a>
        </nav>

        <div className="form-container">
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
              rows={5}
            />

            <label>Instructions:</label>
            <textarea
              name="instructions"
              defaultValue={recipe.instructions}
              placeholder="Enter instructions"
              rows={6}
            />

            <label>Category:</label>
            <input
              name="category"
              defaultValue={recipe.category}
              placeholder="e.g. Breakfast, Dessert"
            />

            <label>Replace Image:</label>
            <input name="image" type="file" accept="image/*" />

            <button type="submit">Update Recipe</button>
          </form>
        </div>
      </body>
    </html>
  );
}

module.exports = EditRecipe;
