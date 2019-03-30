import React from 'react';
import './card-list.scss';
import Layout from "../layout";
import Card from "../card";

const CardList = ({ films }) => {
    return (
        <Layout>
            <div className="card-list">
                {
                    films.map(film => {
                        return <Card key={film.label} film={film}/>
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
