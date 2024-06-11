const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const postSchema = new mongoose.Schema({
    id: String,
    title: String,
    date: String,
    views: { type: Number, default: 0 },
});

const Post = mongoose.model('Post', postSchema);

// Endpoint to get all posts
app.get('/api/posts', async (req, res) => {
    try {
        const posts = await Post.find({});
        res.json(posts);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Endpoint to get a single post by ID and increment its view count
app.get('/api/posts/:id', async (req, res) => {
    try {
        const post = await Post.findOne({ id: req.params.id });
        if (!post) {
            return res.status(404).send('Post not found');
        }
        post.views += 1;
        await post.save();
        res.json(post);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../my-blog/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../my-blog/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
