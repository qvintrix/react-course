import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchFilter from '../search-filter';
import AppFooter from '../app-footer';
import Results from "../results";
import FilmDetailHeader from "../film-detail-header";
import CardList from "../card-list";
import {connect} from 'react-redux'
import {fetchFilms} from "../../actions";
import './app.scss';

class App extends Component {
    state = {};

    onSortedBy = (filter) => {
        this.setState({
            sortBy: filter
        })
    };

    onSearchBy = (filter) => {
        this.setState({
            searchByFilter: filter
        })
    };

    componentDidMount() {
        this.props.fetchFilms();
    }

    render() {
        return (
            <div className="react-app">
                <AppHeader/>
                <SearchFilter
                    searchByFilter={this.props.filmFilter.searchByFilter}
                    onSearchBy={this.onSearchBy}/>
                <Results onSortedBy={this.onSortedBy} sortBy={this.props.filmFilter.sortBy}/>
                <CardList films={this.props.films}/>
                <AppFooter/>


                <hr/>
                <AppHeader/>
                <FilmDetailHeader/>
                <Results onSortedBy={this.onSortedBy} sortBy={this.props.filmFilter.sortBy}/>
                <CardList films={this.props.films}/>
                <AppFooter/>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        films: state.films,
        filmFilter: state.filmFilter
    }
};

const mapDispatchToProps = dispatch => ({
    fetchFilms: () => dispatch(fetchFilms())
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
