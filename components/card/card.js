import React from 'react';
import PropTypes from 'prop-types';
import {Wrapper, Image, Description, ReleaseYear, Genre, GenreItem} from './styles';

const Card = ({ film }) => {
    let year;
    if (film) {
        const d = new Date(film.release_date);
        year = d.getFullYear();
    }

    const cardContent = (
        <Wrapper>
            <Image src={film.poster_path}/>
            <Description>
                {film.title}
                <ReleaseYear>{year}</ReleaseYear>
            </Description>
            <Genre>
                {
                    film.genres.map(genre => (<GenreItem key={genre}>{genre}</GenreItem>))
                }
            </Genre>
        </Wrapper>
    );
    return film && cardContent;
};

export default Card;

Card.propTypes = {
    film: PropTypes.object,
};
