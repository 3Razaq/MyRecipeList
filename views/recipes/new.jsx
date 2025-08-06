const React = require('react');
const Layout = require('../layouts/Layout');

function NewRecipe() {
  return (
    <Layout title="Add New Recipe" sheetName="new">
      <main className="container-new">
        <h2>Add a New Recipe</h2>

        <form
          action="/recipes"
          method="POST"
          encType="multipart/form-data"
          className="form"
        >
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input name="title" id="title" required placeholder="Recipe title" />
          </div>

          <div className="form-group">
            <label htmlFor="ingredients">Ingredients:</label>
            <textarea
              name="ingredients"
              id="ingredients"
              placeholder="Enter ingredients"
              rows={4}
            />
          </div>

          <div className="form-group">
            <label htmlFor="instructions">Instructions:</label>
            <textarea
              name="instructions"
              id="instructions"
              placeholder="Enter instructions"
              rows={5}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              name="description"
              id="description"
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <input
              name="category"
              id="category"
              placeholder="e.g. Breakfast, Dessert"
            />
          </div>

          <div className="form-group">
            <label htmlFor="imageFile">Recipe Image (Upload file):</label>
            <input name="imageFile" id="imageFile" type="file" accept="image/*" />
          </div>

          <div className="form-group">
            <label htmlFor="imageUrl">Or Image URL:</label>
            <input
              name="imageUrl"
              id="imageUrl"
              type="url"
              placeholder="Paste image URL here"
            />
          </div>

          <button type="submit" className="btn">Add Recipe</button>
        </form>

        <a href="/recipes" className="btn btn-back">← Back to Home</a>
      </main>
    </Layout>
  );
}

module.exports = NewRecipe;
