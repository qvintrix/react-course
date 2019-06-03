import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Layout from '../layout';
import {Wrapper, Container, SearchBtn} from './styles';
import './app-header.scss';

const AppHeader = ({ isFilmDetailPage }) => {
    let isSearchBtnAppear;
    if (isFilmDetailPage) {
        isSearchBtnAppear = !(Object.keys(isFilmDetailPage).length == 0 && isFilmDetailPage.constructor === Object);
    }

    return (
        <Wrapper>
            <Layout>
                <Container>
                    <div className="app-header__title">
                        <Link href='/'>
                            <a>netflixroulette</a>
                        </Link>
                    </div>
                    <Link href='/'>
                        <a>{isSearchBtnAppear && <SearchBtn>Search</SearchBtn>}</a>
                    </Link>
                </Container>
            </Layout>
        </Wrapper>
    );
};

export default AppHeader;

AppHeader.propTypes = {
    isFilmDetailPage: PropTypes.object,
};
