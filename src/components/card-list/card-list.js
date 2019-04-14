import React from 'react';
import Layout from "../layout";
import Card from "../card";
import './card-list.scss';

const CardList = (props) => {
    console.log(props.films)
    return (
        <Layout>
            <div className="card-list">
                {
                    props.films.films.map(film => {
                        return <Card key={film.id} film={film}/>
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
