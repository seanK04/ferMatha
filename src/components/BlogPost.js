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
        import(`../posts/${postId}.md`)
            .then(res => {
                fetch(res.default)
                    .then(response => response.text())
                    .then(text => setContent(text))
                    .catch(err => console.error('Error fetching markdown file:', err));
            })
            .catch(err => console.error('Error importing markdown file:', err));
    }, [postId]);

    return (
        <div>
            <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={{
                    img: ImageRenderer,
                    math: ({ value }) => {
                        console.log('math value:', value);
                        return <MathRenderer value={value} displayMode={true} />;
                    },
                    inlineMath: ({ value }) => {
                        console.log('inlineMath value:', value);
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
