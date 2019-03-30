import React, {Component} from 'react';
import './search-filter.scss';
import Layout from "../layout";

class SearchFilter extends Component {

    inputValue = React.createRef();

    handleSubmit = (event) => {
        event.preventDefault();
    };

    render() {
        const { onSearchBy, searchByFilter } = this.props;

        return (
            <div className="search-filter">
                <Layout>
                    <div className="search-filter__form-container search-form">
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                <div className="search-form__title">FIND YOUR MOVIE</div>
                                <input className="search-form__input-field"
                                    type="text"
                                    ref={this.inputValue}/>
                            </label>
                            <div className="search-form__control-btns">
                                <div className="search-form__filter filter-container">
                                    <span>SEARCH BY</span>
                                    <button
                                        className={`filter-container__button ${searchByFilter === 'TITLE' ? 'filter-container__active' : ''}`}
                                        onClick={() => onSearchBy('TITLE')}>
                                        TITLE
                                    </button>
                                    <button
                                        className={`filter-container__button ${searchByFilter === 'GENRE' ? 'filter-container__active' : ''}`}
                                        onClick={() => onSearchBy('GENRE')}>
                                        GENRE
                                    </button>
                                </div>
                                <input type="submit" value="Search" className="search-form__submit-btn"/>
                            </div>
                        </form>
                    </div>
                </Layout>
            </div>
        );
    }
}

export default SearchFilter;
