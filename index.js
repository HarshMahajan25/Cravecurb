const express = require('express');
const mongoDB = require("./db");
const path = require("path");

const app = express();
const port = 5000;

// Connect to MongoDB
mongoDB();

// Middleware to handle CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// Middleware to handle preflight requests
app.options('*', (req, res) => {
  res.sendStatus(200);
});

app.use(express.json()); // Middleware to parse JSON bodies

// Routes
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/Displaydata"));
app.use('/api', require("./Routes/OrderData"));

// Serve static files from the React frontend app
app.use(express.static(path.resolve(__dirname, "frontend", "build")));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
