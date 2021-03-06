import React, {Component} from 'react';
import './app-header.scss';
import Layout from "../layout";

class AppHeader extends Component {
    state = { value: '' };

    render() {
        return (
            <div className="app-header">
                <Layout>
                    <div className="app-header__container">
                        <div className="app-header__title">
                            netflixroulette
                        </div>
                        {true && <button className="app-header__search-btn">Search</button>}
                    </div>
                </Layout>
            </div>
        );
    }
};

export default AppHeader;
