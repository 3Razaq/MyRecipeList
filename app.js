const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();

// Import multer from your custom config
const upload = require('./config/multer'); // adjust path if needed

// Controllers
const recipesController = require('./controllers/recipes.controller');

// Routes
const authRoutes = require('./routes/auth');

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected to Atlas'))
  .catch((err) => console.log('MongoDB connection error:', err));

// View engine setup
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



// Auth routes
app.use('/', authRoutes);

// Recipe routes with multer upload middleware
app.get('/recipes', recipesController.index);
app.get('/recipes/new', recipesController.renderNew);
app.post('/recipes', upload.single('imageFile'), recipesController.create);  // Note: fieldname is 'imageFile'
app.get('/recipes/:id', recipesController.show);
app.get('/recipes/:id/edit', recipesController.renderEdit);
app.put('/recipes/:id', upload.single('imageFile'), recipesController.update);  // same here
app.delete('/recipes/:id', recipesController.delete);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
