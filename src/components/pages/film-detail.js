import React, {Component} from 'react';
import FilmDetailHeader from "../film-detail-header";
import {connect} from "react-redux";
import {fetchFilm} from "../../actions";

class FilmDetailPage extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchFilm(id)
    }

    render() {
        return (
            <>
                <FilmDetailHeader film={this.props.film.film}/>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        filmFilter: state.filmFilter,
        film: state.film
    }
};

const mapDispatchToProps = dispatch => ({
    fetchFilm: (id) => dispatch(fetchFilm(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilmDetailPage);
