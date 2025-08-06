const React = require('react');

function Index({ recipes }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>Recipe List</title>
        <link rel="stylesheet" href="/stylesheets/index.css" />
      </head>
      <body>
        <header className="navbar">
          <div className="container">
            <h1 className="logo">🍲 My Recipes</h1>
            <nav>
              {/* <a href="/recipes">Home</a> */}
              <a href="/recipes/new">Add Recipe</a>
            </nav>
          </div>
        </header>

        <main className="container">
          <h2>All Recipes</h2>

          <div className="card-container">
            {recipes.map((recipe) => {
              const imageUrl = recipe.image
                ? recipe.image.startsWith('http')
                  ? recipe.image
                  : `uploads/${recipe.image.split('/').pop()}` // Fix here: prepend /uploads/ and use only filename
                : null;

              return (
                <div className="card" key={recipe._id}>
                  {imageUrl && (
                    <img
                      src={imageUrl}
                      alt={recipe.title}
                      className="card-image"
                    />
                  )}
                  <div className="card-content">
                    <h3>{recipe.title}</h3>
                    <p>{recipe.category}</p>

                    <div className="card-actions">
                      <a className="btn" href={`/recipes/${recipe._id}`}>
                        View
                      </a>
                      <a className="btn btn-secondary" href={`/recipes/${recipe._id}/edit`}>
                        Edit
                      </a>
                      <form
                        method="POST"
                        action={`/recipes/${recipe._id}?_method=DELETE`}
                        style={{ display: 'inline' }}
                      >
                        <button className="btn btn-danger" type="submit">
                          Delete
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </body>
    </html>
  );
}

module.exports = Index;
