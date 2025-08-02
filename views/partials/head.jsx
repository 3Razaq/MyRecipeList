const React = require('react');

function Head({ title = 'MyRecipeList', user }) {
  return (
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="/stylesheets/style.css" />
      <title>{title}</title>
    </head>
  );
}

module.exports = Head;
