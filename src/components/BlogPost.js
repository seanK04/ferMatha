import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import axios from 'axios';
import ImageRenderer from './ImageRenderer';
import MathRenderer from './MathRenderer';

const BlogPost = () => {
    const { postId } = useParams();
    const [content, setContent] = useState('');
    const [views, setViews] = useState(0);

    useEffect(() => {
        import(`../posts/${postId}.md`)
            .then(res => {
                fetch(res.default)
                    .then(response => response.text())
                    .then(text => setContent(text))
                    .catch(err => console.error('Error fetching markdown file:', err));
            })
            .catch(err => console.error('Error importing markdown file:', err));

        axios.get(`http://localhost:5000/api/posts/${postId}`)
            .then(response => {
                setViews(response.data.views);
            })
            .catch(err => console.error('Error fetching post data:', err));
    }, [postId]);

    return (
        <div>
            <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={{
                    img: ImageRenderer,
                    math: ({ value }) => <MathRenderer value={value} displayMode={true} />,
                    inlineMath: ({ value }) => <MathRenderer value={value} displayMode={false} />
                }}
            >
                {content}
            </ReactMarkdown>
            <p>Views: {views}</p>
        </div>
    );
};

export default BlogPost;
