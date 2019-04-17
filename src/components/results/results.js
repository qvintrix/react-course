import React, {Fragment} from 'react';
import Layout from "../layout";
import './results.scss';

const Results = ({ onSortedBy, sortBy, count, isHomePage }) => {
    const results = (
        <Fragment>
            <div className="results__found-items">
                {count} movies found
            </div>
            <div className="results__filter">
                <div>Sort by</div>
                <div onClick={() => onSortedBy('release date')}
                    className={sortBy === 'release date' ? 'results__active' : ''}>
                    release date
                </div>
                <div onClick={() => onSortedBy('rating')}
                    className={sortBy === 'rating' ? 'results__active' : ''}>
                    rating
                </div>
            </div>
        </Fragment>
    );

    const detailsInfo = (
        <div className="results__films-by">
            Films By Drama genre:
        </div>
    );

    return (
        <div className="results">
            <Layout>
                <div className="results__container">
                    {
                        (isHomePage) ? results : detailsInfo
                    }
                </div>
            </Layout>
        </div>
    );
};

export default Results;
