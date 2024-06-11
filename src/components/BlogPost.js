import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import ImageRenderer from './ImageRenderer';
import MathRenderer from './MathRenderer';

const BlogPost = () => {
    const { postId } = useParams();
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchPostContent = async () => {
            try {
                const response = await fetch(`/api/posts/${postId}`);
                const data = await response.json();
                setContent(data.content);
            } catch (error) {
                console.error('Error fetching post content:', error);
            }
        };

        fetchPostContent();
    }, [postId]);

    useEffect(() => {
        const incrementViews = async () => {
            try {
                await fetch(`/api/posts/${postId}`, {
                    method: 'GET'
                });
            } catch (error) {
                console.error('Error incrementing views:', error);
            }
        };

        incrementViews();
    }, [postId]);

    return (
        <div>
            <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={{
                    img: ImageRenderer,
                    math: ({ value }) => {
                        return <MathRenderer value={value} displayMode={true} />;
                    },
                    inlineMath: ({ value }) => {
                        return <MathRenderer value={value} displayMode={false} />;
                    }
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
};

export default BlogPost;
