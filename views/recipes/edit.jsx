const React = require('react');
const Layout = require('../layouts/Layout');

function EditRecipe({ recipe }) {
  return (
    <Layout title={`Edit ${recipe.title}`} sheetName="">
      <main className="form-container">
        <h2>Edit Recipe</h2>
        <form
          action={`/recipes/${recipe._id}?_method=PUT`}
          method="POST"
          encType="multipart/form-data"
        >
          <label htmlFor="title" className="form-label">Title:</label>
          <input
            id="title"
            name="title"
            className="form-input"
            defaultValue={recipe.title}
            required
            placeholder="Recipe title"
          />
          
          <label htmlFor="ingredients" className="form-label">Ingredients:</label>
          <textarea
            id="ingredients"
            name="ingredients"
            className="form-textarea"
            defaultValue={recipe.ingredients}
            placeholder="Enter ingredients"
            rows={4}
          />

          <label htmlFor="instructions" className="form-label">Instructions:</label>
          <textarea
            id="instructions"
            name="instructions"
            className="form-textarea"
            defaultValue={recipe.instructions}
            placeholder="Enter instructions"
            rows={5}
          />

          <label htmlFor="description" className="form-label">Description:</label>
          <textarea
            id="description"
            name="description"
            className="form-textarea"
            defaultValue={recipe.description}
            placeholder="Enter description"
            rows={6}
          />

          <label htmlFor="category" className="form-label">Category:</label>
          <input
            id="category"
            name="category"
            className="form-input"
            defaultValue={recipe.category}
            placeholder="e.g. Breakfast, Dessert"
          />

          <label htmlFor="imageFile" className="form-label">Replace Image (Upload file):</label>
          <input
            id="imageFile"
            name="imageFile"
            type="file"
            accept="image/*"
            className="form-input"
          />

          <label htmlFor="imageUrl" className="form-label">Or Image URL:</label>
          <input
            id="imageUrl"
            name="imageUrl"
            type="url"
            className="form-input"
            placeholder="Paste image URL here"
            defaultValue={
              recipe.image && !recipe.image.startsWith('uploads/')
                ? recipe.image
                : ''
            }
          />

          {recipe.image && (
            <div className="current-image">
              <p>Current Image:</p>
              <img
                src={recipe.image.startsWith('http') ? recipe.image : `/${recipe.image}`}
                alt={recipe.title}
                style={{ maxWidth: '300px', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}
              />
            </div>
          )}

          <button type="submit" className="btn btn-edit" style={{ marginTop: '1rem' }}>
            Update Recipe
          </button>
        </form>

        <a href="/recipes" className="btn btn-back" style={{ display: 'block', textAlign: 'center' }}>
          ← Back to Recipes
        </a>
      </main>
    </Layout>
  );
}

module.exports = EditRecipe;
