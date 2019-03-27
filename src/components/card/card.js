import React from 'react';
import './card.scss';

const Card = ({ label }) => {
    return (
        <div className="card">
            <img src="./src/assets/bg.png"/>
            <div className="card__description">
                {label}
                <span className="card__release-year">2004</span>
            </div>
            <div className="card__genre">
                Action & Adventure
            </div>
        </div>
    );
};

export default Card;
