import React from 'react';
import {Link} from "react-router-dom";
import Layout from "../layout";
import Card from "../card";
import './card-list.scss';

const CardList = ({ films }) => {
    return (
        <Layout>
            <div className="card-list">
                {
                    films.map(film => {
                        return <Link to={`/film/${film.id}`} key={film.release_date}><Card film={film}/></Link>
                    })
                }
            </div>
        </Layout>
    );
};

CardList.defaultProps = {
    films: []
};

export default CardList;
