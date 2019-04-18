import React from 'react';
import Layout from "../layout";
import './film-detail-header.scss';

const FilmDetailHeader = ({ film }) => {
    let year;
    if (film) {
        const d = new Date(String(film['release_date']));
        year = d.getFullYear();
    }

    const filmDetailContent = (
        <div className="film-detail-container">
            <div>
                <img src={film.poster_path} width="200px"/>
            </div>
            <div className="film-detail__description film-overview">
                <div className="film-overview__title">{film.title}</div>
                <div className="film-overview__genre">
                    {
                        film && film.genres && film.genres.map(genre => {
                            return (<span key={genre} className="film-overview__genre-item">{genre}</span>)
                        })
                    }
                </div>
                <div className="film-overview__duration">
                    <span>{film.release_date && year}</span>
                    <span>154min</span>
                </div>
                <div className="film-overview__description">
                    {film.overview}
                </div>
            </div>
        </div>
    )
    return (
        <div className="film-detail">
            <Layout>
                {
                    film && filmDetailContent
                }
            </Layout>
        </div>
    );
};

export default FilmDetailHeader;
