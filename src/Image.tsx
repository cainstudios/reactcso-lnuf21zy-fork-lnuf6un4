import React from 'react';

function Image({ aspectRatio = '16/9', source }) {
    const [width, height] = aspectRatio.split('/').map(Number);
    const percentage = (height / width) * 100;

    return (
        <div className="relative" style={{ paddingBottom: `${percentage}%` }}>
            <img src={source} alt="" className="absolute top-0 left-0 w-full h-full object-cover" />
        </div>
    );
}

export default Image;