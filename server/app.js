const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

app.use(express.json());

// connect to mongodb
const dbURI = 'mongodb+srv://username:password@cluster0.uke9z6z.mongodb.net/mgblogs?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(5000))
    .catch((err) => console.log(err));


// Middleware

// middleware & static files
// app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }));

// Third party middleware
app.use(morgan('dev'));


// routes
app.get('/api', (req, res) => {
    res.redirect('/api/blogs');
});

//blog routes
app.use('/api/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
    const obj = {
        "status": "failed",
        "message": "404 error"
    }
    res.status(404).json(obj);
});
