import React from 'react';
import './film-detail-header.scss';
import Layout from "../layout";

const FilmDetailHeader = () => {

    return (
        <div className="film-detail">
            <Layout>
                <div className="film-detail-container">
                    <div>
                        <img src="./src/assets/bg.png"/>
                    </div>
                    <div className="film-detail__description film-overview">
                        <div className="film-overview__title">Pulp Fiction</div>
                        <div className="film-overview__sub-title">Oscar-winning Movies</div>
                        <div className="film-overview__duration">
                            <span>1994</span>
                            <span>154min</span>
                        </div>
                        <div className="film-overview__description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eius quia quidem?
                            Accusantium
                            commodi corporis deserunt, dolor dolores error esse eveniet labore nisi officiis porro,
                            quasi
                            ratione repellat suscipit, tempore?
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default FilmDetailHeader;
