import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import FilmDetailHeader from '../components/film-detail-header';
import {fetchFilm} from '../actions';
import AppHeader from '../components/app-header';
import Results from '../components/results';
import CardList from '../components/card-list';
import AppFooter from '../components/app-footer';

let cacheId;

class FilmDetailPage extends Component {
    componentDidMount() {
        const { id } = this.props.router.query;
        cacheId = id;
        this.props.fetchFilm(id);
    }

    componentDidUpdate(prevProps) {
        console.log(this.props.router.query);
        const id = prevProps.router.query.id;

        // if (cacheId !== id) {
        //     this.props.fetchFilm(id);
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
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FilmDetailPage);
