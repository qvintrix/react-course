import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchFilter from '../search-filter';
import AppFooter from '../app-footer';
import './app.scss';
import Results from "../results";
import FilmDetailHeader from "../film-detail-header";
import CardList from "../card-list";
import ErrorBoundry from '../error-boundry';

const films = [
    {
        label: 'Kill Bill, vol 1'
    },
    {
        label: 'Kill Bill, vol 2'
    },
    {
        label: 'Kill Bill, vol 3'
    },
    {
        label: 'Kill Bill, vol 4'
    },
    {
        label: 'Kill Bill, vol 5'
    },
    {
        label: 'Kill Bill, vol 6'
    }
];

class App extends Component {
    state = {
        films: films,
        sortBy: 'release date'
    };

    onSortedBy = (filter) => {
        this.setState({
            sortBy: filter
        })
    };

    render() {
        return (
            <ErrorBoundry>
                <div className="react-app">
                    <AppHeader/>
                    <SearchFilter/>
                    <Results onSortedBy={this.onSortedBy} sortBy={this.state.sortBy}/>
                    <CardList films={this.state.films}/>
                    <AppFooter/>


                    <hr/>
                    <AppHeader/>
                    <FilmDetailHeader/>
                    <Results onSortedBy={this.onSortedBy} sortBy={this.state.sortBy}/>
                    <CardList films={this.state.films}/>
                    <AppFooter/>
                </div>
            </ErrorBoundry>
        );
    }

}

export default App;
