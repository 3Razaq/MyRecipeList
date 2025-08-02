const React = require('react');
const Head = require('./head');

function Index({ user, children }) {
  return (
    <html>
      <Head user={user} />
      <body>
        <nav>
          
          {user ? (
            <>
              <a href="/recipes">Recipes</a>
              <a href="/recipes/new">Add Recipe</a>
              <a href="/auth/sign-out">Sign Out</a>
            </>
          ) : (
            <>
              <a href="/auth/sign-in">Sign In</a>
              <a href="/auth/sign-up">Sign Up</a>
            </>
          )}
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}

module.exports = Index;
