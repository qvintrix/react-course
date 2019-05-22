import React from 'react';
import './error-indicator.scss';

const ErrorIndicator = () => (
    <div className="error-indicator">
        <span className="boom">BOOM!</span>
        <span>
        something has gone terribly wrong
      </span>
    </div>
);

export default ErrorIndicator;
