const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const multer = require('multer');
const dotenv = require('dotenv');
const path = require('path');
const session = require('express-session');

dotenv.config();

const upload = multer({ dest: 'public/uploads/' });
const app = express();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected to Atlas'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Set view engine to JSX (React)
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'mysecret',
    resave: false,
    saveUninitialized: false,
  })
);

// Auth routes
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

// Recipes routes
const recipesRoutes = require('./routes/recipes');
app.use('/recipes', recipesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});