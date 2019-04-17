import React from 'react';
import Layout from "../layout";
import './app-header.scss';
import {Link} from "react-router-dom";

const AppHeader = ({ isFilmDetailPage }) => {
    const isSearchBtnAppear = !(Object.keys(isFilmDetailPage).length == 0 && isFilmDetailPage.constructor === Object);

    return (
        <div className="app-header">
            <Layout>
                <div className="app-header__container">
                    <div className="app-header__title">
                        <Link to="/">
                            netflixroulette
                        </Link>
                    </div>
                    <Link to="/">
                        {isSearchBtnAppear && <span className="app-header__search-btn">Search</span>}
                    </Link>
                </div>
            </Layout>
        </div>
    );
};

export default AppHeader;
