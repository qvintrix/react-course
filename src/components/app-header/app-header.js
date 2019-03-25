import React, {Component} from 'react';
import './app-header.scss';

class AppHeader extends Component {
    state = { value: '' };

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };

    handleSubmit = (event) => {
        console.log('A name was submitted: ' + this.state.value);
        event.preventDefault();
    };

    render() {
        return (
            <div className="app-header">
                <div className="app-header-container">
                    <div className="app-header__title">
                        netflixroulette
                    </div>
                    <div className="app-header__form-container search-form">
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
                                    <button className="filter-container__button">TITLE</button>
                                    <button className="filter-container__button">GENRE</button>
                                </div>
                                <input type="submit" value="Search" className="search-form__submit-btn"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};

export default AppHeader;
