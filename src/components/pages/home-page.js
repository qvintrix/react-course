import React, {Component, Fragment} from 'react';
import SearchFilter from "../search-filter";
import {connect} from "react-redux";
import AppHeader from "../app-header";
import {changeTypeSearch, changeTypeSort, fetchFilms} from "../../actions";
import Results from "../results";

class HomePage extends Component {

    componentDidMount() {
        this.props.fetchFilms();
    }

    onSearchBy = (filter) => {
        this.props.changeTypeSearch(filter);
    };

    onSortedBy = (filter) => {
        this.props.changeTypeSort(filter);
    }

    onSubmit = (value) => {
        event.preventDefault();
        if (!value.length) {
            return;
        }
        this.getFilms(value);
    };

    getFilms(value) {
        const { searchByFilter, sortBy } = this.props.filmFilter;
        this.props.fetchFilms(searchByFilter, sortBy, value);
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { filmFilter } = this.props;

        return (filmFilter.searchByFilter !== nextProps.filmFilter.searchByFilter) ||
            (filmFilter.sortBy !== nextProps.filmFilter.sortBy);
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
