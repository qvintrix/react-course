import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import FilmDetailHeader from '../components/film-detail-header';
import {fetchFilm, fetchFilms} from '../actions';
import AppHeader from '../components/app-header';
import Results from '../components/results';
import CardList from '../components/card-list';
import AppFooter from '../components/app-footer';

class FilmDetailPage extends Component {

    componentDidMount() {
        const { id } = this.props.router.query;
        const { searchByFilter, sortBy } = this.props.filmFilter;

        this.props.fetchFilm(id);
        if (!this.props.films.films.length) {
            this.props.fetchFilms(searchByFilter, sortBy);
        }
    }

    componentDidUpdate() {
        // console.log(this.props.router.query.id);
        // console.log(this.props.film.film.id);

        // if (Number(this.props.film.film.id) !== Number(this.props.router.query.id)) {
        //     this.props.fetchFilm(this.props.router.query.id);
        // }
    }

    render() {
        return (
            <Fragment>
                <AppHeader isFilmDetailPage={this.props.router.query}/>
                <FilmDetailHeader film={this.props.film.film}/>
                <Results/>
                <CardList films={this.props.films.films}/>
                <AppFooter/>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    filmFilter: state.filmFilter,
    film: state.film,
    films: state.films,
});

const mapDispatchToProps = dispatch => ({
    fetchFilm: id => dispatch(fetchFilm(id)),
    fetchFilms: ((searchFilter, sortFilter, inputValue) => dispatch(fetchFilms(searchFilter, sortFilter, inputValue))),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FilmDetailPage);
