import React from 'react';
import Layout from "../layout";
import './app-header.scss';
import {Link} from "react-router-dom";

const AppHeader = () => {
    return (
        <div className="app-header">
            <Layout>
                <div className="app-header__container">
                    <div className="app-header__title">
                        <Link to="/">
                            netflixroulette
                        </Link>
                    </div>
                    {true && <button className="app-header__search-btn">Search</button>}
                </div>
            </Layout>
        </div>
    );
};

export default AppHeader;
