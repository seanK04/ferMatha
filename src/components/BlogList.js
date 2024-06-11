import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BlogList.css';

const BlogList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('/api/posts');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <ul>
                {posts.map(post => (
                    <li key={post.id} className="post-item">
                        <div className="post-header">
                            <Link to={`/post/${post.id}`} className="post-title">
                                {post.title}
                            </Link>
                            <span className="post-date">{post.date}</span>
                        </div>
                        <div className="post-views">Views: {post.views}</div>
                        <hr className="divider" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogList;
