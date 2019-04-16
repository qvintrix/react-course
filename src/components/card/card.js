import React from 'react';
import './card.scss';

const Card = ({ film }) => {
    const d = new Date(film.release_date);
    const year = d.getFullYear();

    return (
        <div className="card">
            <img src={film.poster_path}
                className="card__pic"/>
            <div className="card__description">
                {film.title}
                <span className="card__release-year">{year}</span>
            </div>
            <div className="card__genre">
                {
                    film.genres.map(genre => {
                        return (<span key={genre} className="card__genre-item">{genre}</span>)
                    })
                }
            </div>
        </div>
    );
};

export default Card;
