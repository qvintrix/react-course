import React, {Component, Fragment} from 'react';
import SearchFilter from "../search-filter";
import {connect} from "react-redux";
import AppHeader from "../app-header";
import {changeTypeSearch, changeTypeSort, fetchFilms} from "../../actions";
import Results from "../results";
import CardList from "../card-list";
import AppFooter from "../app-footer";

class HomePage extends Component {

    componentDidMount() {
        let queryIndex;
        let query;
        const { search } = this.props.match.params;
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
        this.props.history.push(`/search/Search ${value}`)
    };

    getFilms(value) {
        const { searchByFilter, sortBy } = this.props.filmFilter;
        this.props.fetchFilms(searchByFilter, sortBy, value);
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { filmFilter, films } = this.props;

        return (filmFilter.searchByFilter !== nextProps.filmFilter.searchByFilter) ||
            (filmFilter.sortBy !== nextProps.filmFilter.sortBy) || (films.films !== nextProps.films.films);
    }

    render() {
        return (
            <Fragment>
                <AppHeader isFilmDetailPage={this.props.match.params}/>
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
        )
    }
}

const mapStateToProps = state => {
    return {
        films: state.films,
        filmFilter: state.filmFilter
    }
};

const mapDispatchToProps = dispatch => ({
    changeTypeSearch: filter => dispatch(changeTypeSearch(filter)),
    fetchFilms: ((searchFilter, sortFilter, inputValue) =>
        dispatch(fetchFilms(searchFilter, sortFilter, inputValue))),
    changeTypeSort: filter => dispatch(changeTypeSort(filter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);
