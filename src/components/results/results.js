import React, {Component} from 'react';
import './results.scss';

class Results extends Component {

    render() {
        return (
            <div className="results">
                <div className="results__container">
                    <div className="results__found-items">
                        7 movies found
                    </div>
                    <div className="results__filter">
                        <div>Sort by</div>
                        <div>release date</div>
                        <div>rating</div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Results;
