import React from 'react';
import Layout from "../layout";
import './app-header.scss';
import Link from 'next/link';

const AppHeader = ({ isFilmDetailPage }) => {
    let isSearchBtnAppear;
    if (isFilmDetailPage) {
        isSearchBtnAppear = !(Object.keys(isFilmDetailPage).length == 0 && isFilmDetailPage.constructor === Object);
    }

    return (
        <div className="app-header">
            <Layout>
                <div className="app-header__container">
                    <div className="app-header__title">
                        <Link href='/'>
                            <a>netflixroulette</a>
                        </Link>
                    </div>
                    <Link href='/'>
                        <a>{isSearchBtnAppear && <span className="app-header__search-btn">Search</span>}</a>
                    </Link>
                </div>
            </Layout>
        </div>
    );
};

export default AppHeader;
