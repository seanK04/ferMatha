import React from 'react';

const ImageRenderer = ({ alt, src, title }) => {
    const [align, width, height] = title ? title.split(',').map(item => item.trim()) : [];
    const style = {
        display: 'block',
        margin: align === 'center' ? '0 auto' : '0',
        width: width || 'auto',
        height: height || 'auto'
    };

    return <img alt={alt} src={src} style={style} />;
};

export default ImageRenderer;
