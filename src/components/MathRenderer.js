import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

const MathRenderer = ({ value, displayMode }) => {
    if (typeof value !== 'string') {
        console.error('MathRenderer: value is not a string:', value);
        return null;
    }

    const isCentered = value.startsWith('{center}');
    const cleanedValue = isCentered ? value.replace('{center}', '').trim() : value;

    const style = {
        display: displayMode ? 'block' : 'inline',
        textAlign: isCentered ? 'center' : 'left',
        margin: displayMode && isCentered ? '1em auto' : '0'
    };

    return (
        <span style={style}>
            {displayMode ? <BlockMath math={cleanedValue} /> : <InlineMath math={cleanedValue} />}
        </span>
    );
};

export default MathRenderer;
