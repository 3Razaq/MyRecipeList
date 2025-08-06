const React = require('react');
const Index = require('../partials/index');

function SignIn(props) {
  return (
    <Index title="Sign In">
      <main className="container">
        <h1>Sign In</h1>
        {props.error && <p style={{ color: 'red' }}>{props.error}</p>}
        <form action="/auth/sign-in" method="POST" className="form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input name="username" id="username" placeholder="Username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              name="password"
              id="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="btn">Sign In</button>
        </form>
        <p>
          Don't have an account? <a href="/auth/sign-up">Sign up here</a>
        </p>
      </main>
    </Index>
  );
}

module.exports = SignIn;
