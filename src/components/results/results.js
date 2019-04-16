import React from 'react';
import Layout from "../layout";
import './results.scss';

const Results = ({ onSortedBy, sortBy, count }) => {
    
    return (
        <div className="results">
            <Layout>
                <div className="results__container">
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

                    {/*<div className="results__films-by">*/}
                    {/*Films By Drama genre*/}
                    {/*</div>*/}
                </div>
            </Layout>
        </div>
    );
};

export default Results;
