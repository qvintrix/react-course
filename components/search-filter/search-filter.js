import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Layout from '../layout';
import {Wrapper, SubmitBtn, Title, Genre, ControlBtns, SearchFormTitle, InputField} from './styles';
import './search-filter.scss';

class SearchFilter extends Component {
    inputValue = React.createRef();

    render() {
        const { onSearchBy, onSubmit, searchByFilter } = this.props;

        return (
            <Wrapper>
                <Layout>
                    <div className="search-filter__form-container search-form">
                        <form onSubmit={() => onSubmit(this.inputValue.current.value)}>
                            <label>
                                <SearchFormTitle>FIND YOUR MOVIE</SearchFormTitle>
                                <InputField
                                    type="text"
                                    ref={this.inputValue}/>
                            </label>
                            <ControlBtns>
                                <div className="search-form__filter filter-container">
                                    <span>SEARCH BY</span>
                                    <Title
                                        searchByFilter
                                        onClick={() => onSearchBy('title')}>
                                        TITLE
                                    </Title>
                                    <Genre
                                        searchByFilter
                                        onClick={() => onSearchBy('genre')}>
                                        GENRE
                                    </Genre>
                                </div>
                                <SubmitBtn type="submit" value="Search"/>
                            </ControlBtns>
                        </form>
                    </div>
                </Layout>
            </Wrapper>
        );
    }
}

export default SearchFilter;

SearchFilter.propTypes = {
    onSearchBy: PropTypes.func,
    onSubmit: PropTypes.func,
    searchByFilter: PropTypes.string,
};
