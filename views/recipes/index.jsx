const React = require('react');

function Index(props) {
  const { recipes } = props;

  return (
    <html>
      <head>
        <title>Recipe List</title>
        <link rel="stylesheet" href="/stylesheets/index.css" />
      </head>
      <body>
        <header className="navbar">
          <div className="container">
            <h1 className="logo">🍲 My Recipes</h1>
            <nav>
              <a href="/recipes">Home</a>
              <a href="/recipes/new">Add Recipe</a>
            </nav>
          </div>
        </header>

        <main className="container">
          <h2>All Recipes</h2>
          <div className="card-container">
            {recipes.map((recipe) => (
              <div className="card" key={recipe._id}>
                {recipe.imagePath && (
                  <img src={`/${recipe.imagePath}`} alt={recipe.name} className="card-image" />
                )}
                <div className="card-content">
                  <h3>{recipe.name}</h3>
                  <p>{recipe.description}</p>
                  <div className="card-actions">
                    <a className="btn" href={`/recipes/${recipe._id}`}>View</a>
                    <a className="btn btn-secondary" href={`/recipes/${recipe._id}/edit`}>Edit</a>
                    <form method="POST" action={`/recipes/${recipe._id}?_method=DELETE`}>
                      <button className="btn btn-danger" type="submit">Delete</button>
                    </form>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </body>
    </html>
  );
}

module.exports = Index;
