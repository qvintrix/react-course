import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import Router from 'next/router';
import SearchFilter from '../components/search-filter';
import AppHeader from '../components/app-header';
import {changeTypeSearch, changeTypeSort, fetchFilms} from '../actions';
import Results from '../components/results';
import CardList from '../components/card-list';
import AppFooter from '../components/app-footer';

class HomePage extends Component {
    componentDidMount() {
        let queryIndex;
        let query;

        const { search } = this.props.router.query;
        const { searchByFilter, sortBy } = this.props.filmFilter;

        if (search) {
            queryIndex = search.indexOf(' ') + 1;
            query = search.slice(queryIndex);
        }

        this.props.fetchFilms(searchByFilter, sortBy, query);
    }

    onSearchBy = (filter) => {
        this.props.changeTypeSearch(filter);
    };

    onSortedBy = (filter) => {
        this.props.changeTypeSort(filter);
    };

    onSubmit = (value) => {
        event.preventDefault();
        if (!value.length) {
            return;
        }
        this.getFilms(value);
        Router.push('/', `/search/Search ${value}`);
    };

    getFilms(value) {
        const { searchByFilter, sortBy } = this.props.filmFilter;
        this.props.fetchFilms(searchByFilter, sortBy, value);
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { filmFilter, films } = this.props;

        return (filmFilter.searchByFilter !== nextProps.filmFilter.searchByFilter)
            || (filmFilter.sortBy !== nextProps.filmFilter.sortBy) || (films.films !== nextProps.films.films);
    }

    render() {
        return (
            <Fragment>
                <AppHeader isFilmDetailPage={this.props.pageProps}/>
                <SearchFilter
                    searchByFilter={this.props.filmFilter.searchByFilter}
                    onSearchBy={this.onSearchBy}
                    onSubmit={this.onSubmit}/>
                <Results onSortedBy={this.onSortedBy}
                    sortBy={this.props.filmFilter.sortBy}
                    count={this.props.films.films.length}
                    isHomePage/>
                <CardList films={this.props.films.films}/>
                <AppFooter/>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    films: state.films,
    filmFilter: state.filmFilter,
});

const mapDispatchToProps = dispatch => ({
    changeTypeSearch: filter => dispatch(changeTypeSearch(filter)),
    fetchFilms: ((searchFilter, sortFilter, inputValue) => dispatch(fetchFilms(searchFilter, sortFilter, inputValue))),
    changeTypeSort: filter => dispatch(changeTypeSort(filter)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomePage);
