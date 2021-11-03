// Modules
const express = require('express');
const app = express();
const PORT = process.env.PORT||5000;

// Router
const routes = require('./routes/router');

// Middleware to parse body
app.use(express.json());

// Define routes
app.use(routes);
app.use((req, res) => {
  res.status(404).json({
    message: 'Ups!!! Resource not found1.',
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Books app listening at http://localhost:${PORT}`)
});

