import React from 'react';
const ImageRenderer = (props) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <img {...props} style={{ width: 600, height: 200 }} />
        </div>
    );
};
export default ImageRenderer;
