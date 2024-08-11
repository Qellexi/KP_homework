// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRoutes = require('C:/Users/Samsung/PhpstormProjects/kp_it_hillel/kp/20_lec/todo-api/routes/todoRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', todoRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost/todo-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Connection error', err.message);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
