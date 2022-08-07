const Blog = require('../models/blog');

// Get All Blogs
const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
}

// Get Blog details
const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(404).json(err);
        });
}

// Create new blog
const blog_create_post = (req, res) => {
    const blog = new Blog(req.body);
    
    blog.save()
        .then((result) => {
            const obj = {
                "status": "success",
                "message": "Blog is added successfully"
            }
            res.status(200).json(obj);
        })
        .catch((err) => {
            res.status(404).json(err);
        });
}

// Delete blog
const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs' });
        })
        .catch(err => {
            res.status(404).json(err);
        });
}

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}