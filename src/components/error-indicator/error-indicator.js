import React from 'react';
import icon from '../../assets/death-star.png';
import './error-indicator.scss';

const ErrorIndicator = () => (
    <div className="error-indicator">
        <img src={icon} alt="error icon"/>
        <span className="boom">BOOM!</span>
        <span>
        something has gone terribly wrong
      </span>
    </div>
);

export default ErrorIndicator;
