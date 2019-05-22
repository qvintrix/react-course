import React, {Component, Fragment} from 'react';
import FilmDetailHeader from "../components/film-detail-header";
import {connect} from "react-redux";
import {fetchFilm} from "../actions";
import AppHeader from "../components/app-header";
import Results from "../components/results";
import CardList from "../components/card-list";
import AppFooter from "../components/app-footer";

class FilmDetailPage extends Component {

    componentDidMount() {
        const { id } = this.props.router.query;
        this.props.fetchFilm(id)
    }

    componentDidUpdate(prevProps) {
        const { id } = this.props.router.query;
        if (id !== prevProps.router.query['id']) {
            this.props.fetchFilm(id)
        }
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
        )
    }
}

const mapStateToProps = state => {
    return {
        filmFilter: state.filmFilter,
        film: state.film,
        films: state.films
    }
};

const mapDispatchToProps = dispatch => ({
    fetchFilm: (id) => dispatch(fetchFilm(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilmDetailPage);
