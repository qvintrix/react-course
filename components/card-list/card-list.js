import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Layout from '../layout';
import Card from '../card';
import './card-list.scss';

const CardList = ({ films }) => (
    <Layout>
        <div className="card-list">
            {
                films.map(film => <Link
                    href={{ pathname: '/film', query: { id: film.id } }} as={`/film/${film.id}`}
                    key={film.release_date}>
                    <a><Card film={film}/></a>
                </Link>)
            }
        </div>
    </Layout>
);

CardList.defaultProps = {
  films: [],
};

export default CardList;

CardList.propTypes = {
  films: PropTypes.array,
};
