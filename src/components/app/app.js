import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import AppHeader from '../app-header';
import SearchFilter from '../search-filter';
import AppFooter from '../app-footer';
import Results from "../results";
import FilmDetailHeader from "../film-detail-header";
import CardList from "../card-list";
import HomePage from "../pages/home-page";
import FilmDetailPage from "../pages/film-detail";
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

    componentDidMount() {
        this.props.fetchFilms();
    }

    render() {
        const { films, filmFilter } = this.props;
        
        return (
            <div className="react-app">
                <AppHeader/>
                <Switch>
                    <Route path="/" component={HomePage} exact></Route>
                    <Route path="/film/:id" component={FilmDetailPage}></Route>
                </Switch>
                <Results onSortedBy={this.onSortedBy}
                    sortBy={filmFilter.sortBy}
                    count={films.films.length}
                />
                <CardList films={films.films}/>
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
