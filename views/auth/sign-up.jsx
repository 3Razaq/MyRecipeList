const React = require('react');
const Index = require('../partials/index');

function SignUp(props) {
  return (
    <Index title="Sign Up">
      <main className="container">
        <h1>Sign Up</h1>
        {props.error && <p style={{ color: 'red' }}>{props.error}</p>}
        <form action="/auth/sign-up" method="POST" className="form">
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
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              name="confirmPassword"
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              required
            />
          </div>
          <button type="submit" className="btn">Sign Up</button>
        </form>
        <p>
          Already have an account? <a href="/auth/sign-in">Sign in here</a>
        </p>
      </main>
    </Index>
  );
}

module.exports = SignUp;
