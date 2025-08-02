const React = require('react');
const Index = require('../partials/index');

function SignUp() {
  return (
    <Index>
      <h1>Sign Up</h1>
      <form action="/auth/sign-up" method="POST">
        <input name="username" placeholder="Username" required />
        <input name="password" type="password" placeholder="Password" required />
        <input name="confirmPassword" type="password" placeholder="Confirm Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </Index>
  );
}

module.exports = SignUp;
