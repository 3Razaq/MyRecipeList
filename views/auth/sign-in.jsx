const React = require('react');
const Index = require('../partials/index');

function SignIn(props) {
  return (
    <Index>
      <h1>Sign In</h1>
      {props.error && <p style={{ color: 'red' }}>{props.error}</p>}
      <form action="/auth/sign-in" method="POST">
        <input name="username" placeholder="Username" required />
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
      </form>
    </Index>
  );
}

module.exports = SignIn;