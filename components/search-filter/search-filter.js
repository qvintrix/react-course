import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Layout from '../layout';
import {
    Wrapper,
    SubmitBtn,
    Title,
    Genre,
    ControlBtns,
    SearchFormTitle,
    InputField,
    Filter,
    FormContainer
} from './styles';

class SearchFilter extends Component {
    inputValue = React.createRef();

    render() {
        const { onSearchBy, onSubmit, searchByFilter } = this.props;

        return (
            <Wrapper>
                <Layout>
                    <FormContainer>
                        <form onSubmit={() => onSubmit(this.inputValue.current.value)}>
                            <label>
                                <SearchFormTitle>FIND YOUR MOVIE</SearchFormTitle>
                                <InputField
                                    type="text"
                                    ref={this.inputValue}/>
                            </label>
                            <ControlBtns>
                                <Filter>
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
                                </Filter>
                                <SubmitBtn type="submit" value="Search"/>
                            </ControlBtns>
                        </form>
                    </FormContainer>
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
