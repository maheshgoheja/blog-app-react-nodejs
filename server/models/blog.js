const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema to define the structure
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

// model based on the schema
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;