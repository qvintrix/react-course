import React, {Component, Fragment} from 'react';
import FilmDetailHeader from "../film-detail-header";
import {connect} from "react-redux";
import {fetchFilm} from "../../actions";
import AppHeader from "../app-header";
import Results from "../results";
import CardList from "../card-list";
import AppFooter from "../app-footer";

class FilmDetailPage extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchFilm(id)
    }

    componentDidUpdate(prevProps) {
        const { id } = this.props.match.params;

        if (id !== prevProps.match.params['id']) {
            this.props.fetchFilm(id)
        }
    }

    render() {
        return (
            <Fragment>
                <AppHeader isFilmDetailPage={this.props.match.params}/>
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
