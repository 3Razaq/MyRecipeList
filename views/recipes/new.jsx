const React = require('react');
const Index = require('../partials/index'); // assuming you have a layout

function NewRecipe() {
  return (
    <Index title="Add New Recipe">
      <link rel="stylesheet" href="/stylesheets/new.css" />
      <h1>Add a New Recipe</h1>
      <form action="/recipes" method="POST" encType="multipart/form-data">
        <div>
          <label htmlFor="title">Title:</label><br />
          <input type="text" id="title" name="title" required />
        </div>
        <div>
          <label htmlFor="description">Description:</label><br />
          <textarea id="description" name="description" rows="4" cols="50" />
        </div>
        <div>
          <label htmlFor="image">Recipe Image:</label><br />
          <input type="file" id="image" name="image" accept="image/*" />
        </div>
        <button type="submit" className="btn">Add Recipe</button>
      </form>

      {/* Back button */}
      <a href="/recipes" className="btn btn-back">← Back to Home</a>
    </Index>
  );
}

module.exports = NewRecipe;
