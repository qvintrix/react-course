import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Layout from '../layout';
import {Wrapper, Filter, Container, ReleaseDate, Rating} from './styles';

const Results = ({
                     onSortedBy, sortBy, count, isHomePage,
                 }) => {
    const results = (
        <Fragment>
            <div>
                {count} movies found
            </div>
            <Filter>
                <div>Sort by</div>
                <ReleaseDate onClick={() => onSortedBy('release date')}
                    sortBy>
                    release date
                </ReleaseDate>
                <Rating onClick={() => onSortedBy('rating')}
                    sortBy>
                    rating
                </Rating>
            </Filter>
        </Fragment>
    );

    const detailsInfo = (
        <div className="results__films-by">
            Films By Drama genre:
        </div>
    );

    return (
        <Wrapper>
            <Layout>
                <Container>
                    {
                        (isHomePage) ? results : detailsInfo
                    }
                </Container>
            </Layout>
        </Wrapper>
    );
};

export default Results;

Results.propTypes = {
    onSortedBy: PropTypes.func,
    sortBy: PropTypes.string,
    count: PropTypes.number,
    isHomePage: PropTypes.bool,
};
