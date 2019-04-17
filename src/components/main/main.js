import React, {Fragment} from 'react';
import AppFooter from '../app-footer';
import CardList from "../card-list";
import {connect} from 'react-redux';
import './main.scss';

const Main = () => (
    <Fragment>
        {this.props.children}
        <CardList films={this.props.films.films}/>
        <AppFooter/>
    </Fragment>
)

const mapStateToProps = state => {
    return {
        films: state.films,
    }
};


export default connect(
    mapStateToProps
)(Main);
