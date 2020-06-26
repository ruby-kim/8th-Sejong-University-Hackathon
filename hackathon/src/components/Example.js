import React from 'react';
import './Example.css';

const Example = ({children}) => {
    return (
        <div className="example">
            {children}
        </div>
    );
};

export default Example;