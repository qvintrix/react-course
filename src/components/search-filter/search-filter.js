import React, {Component} from 'react';
import './search-filter.scss';
import Layout from "../layout";

class SearchFilter extends Component {
    state = { value: '' };


    onSearchBy = (event) => {
        event.preventDefault();
        console.log(event.currentTarget.value)
        // this.setState({ value: event.target.value });
    };

    handleChange = (event) => {
        console.log('A name was submitted: ' + event.target.value);
    };

    handleSubmit = (event) => {
        console.log(event);
        // console.log('A name was submitted: ' + this.state.value);
    };

    render() {
        return (
            <div className="search-filter">
                <Layout>
                    <div className="search-filter__form-container search-form">
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                <div className="search-form__title">FIND YOUR MOVIE</div>
                                <input className="search-form__input-field"
                                    type="text"
                                    value={this.state.value}
                                    onChange={this.handleChange}/>
                            </label>
                            <div className="search-form__control-btns">
                                <div className="search-form__filter filter-container">
                                    <span>SEARCH BY</span>
                                    <button className="filter-container__button"
                                        onClick={(this.onSearchBy)}>
                                        TITLE
                                    </button>
                                    <button className="filter-container__button"
                                        onClick={this.onSearchBy}>
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
};

export default SearchFilter;
