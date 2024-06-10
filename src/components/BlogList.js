import React from 'react';
import { Link } from 'react-router-dom';
import './BlogList.css';

const BlogList = () => {
    const posts = [
        { id: 'post2', title: 'Post 2', date: 'June 2, 2024' },
        { id: 'post1', title: 'A Musical Series', date: 'June 1, 2024' }
    ];

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
                        <hr className="divider" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogList;
