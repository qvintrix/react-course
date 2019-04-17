import React, {Component} from 'react';
import Layout from "../layout";
import './search-filter.scss';

class SearchFilter extends Component {

    inputValue = React.createRef();

    render() {
        const { onSearchBy, onSubmit, searchByFilter } = this.props;

        return (
            <div className="search-filter">
                <Layout>
                    <div className="search-filter__form-container search-form">
                        <form onSubmit={() => onSubmit(this.inputValue.current.value)}>
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
                                        className={`filter-container__button ${searchByFilter === 'title' ? 'filter-container__active' : ''}`}
                                        onClick={() => onSearchBy('title')}>
                                        TITLE
                                    </button>
                                    <button
                                        className={`filter-container__button ${searchByFilter === 'genre' ? 'filter-container__active' : ''}`}
                                        onClick={() => onSearchBy('genre')}>
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
