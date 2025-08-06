const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.renderSignIn = (req, res) => {
  res.render('auth/sign-in', { error: null });
};

exports.signIn = async (req, res) => {
  const { username, password } = req.body;
  const foundUser = await User.findOne({ username });

  if (!foundUser) {
    return res.render('auth/sign-in', { error: 'Invalid username or password' });
  }

  const match = await bcrypt.compare(password, foundUser.password);
  if (match) {
    req.session.user = { _id: foundUser._id, username: foundUser.username };
    return res.redirect('/recipes'); // redirect to your protected route
  } else {
    return res.render('auth/sign-in', { error: 'Invalid username or password' });
  }
};

exports.renderSignUp = (req, res) => {
  res.render('auth/sign-up', { error: null });
};

exports.signUp = async (req, res) => {
  const { username, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.render('auth/sign-up', { error: 'Passwords do not match' });
  }

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.render('auth/sign-up', { error: 'Username already taken' });
  }

  const hash = await bcrypt.hash(password, 12);
  const newUser = new User({ username, password: hash });
  await newUser.save();

  return res.redirect('/sign-in');
};

exports.signOut = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/auth/sign-in');
  });
};