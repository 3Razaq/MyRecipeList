const React = require('react');
const Head = require('../partials/head');

function Layout({ user, children, sheetName }) {
  return (
    <html>
      <Head user={user} sheetName={sheetName} />
      <body>
        {/* Header removed */}
        <main>{children}</main>
      </body>
    </html>
  );
}

module.exports = Layout;
