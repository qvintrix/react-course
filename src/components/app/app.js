import React, {Component} from 'react';
import AppHeader from '../app-header';
import AppFooter from '../app-footer';
import './app.scss';
import Results from "../results";
import Card from "../card";

class App extends Component {
    state = {
        name: 'Component'
    };

    render() {
        return (
            <div className="react-app">
                <AppHeader/>
                <Results/>
                <div className="react-app__body-content">
                    <Card/>
                </div>
                <AppFooter/>
            </div>
        );
    }

}

export default App;
